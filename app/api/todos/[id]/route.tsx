import { NextRequest } from 'next/server';
import Todo from "@/models/todoModel";
import { connectDB } from "@/lib/connectDB";
import { getLoggedInUser } from "@/lib/auth";

// Define interfaces
interface TodoDocument {
  id: string;
  text: string;
  completed: boolean;
}

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(_: NextRequest, { params }: RouteContext): Promise<Response> {
  try {
    await connectDB();
    const user = await getLoggedInUser();
    if (user instanceof Response) return user;

    const { id } = await params;
    const todo: TodoDocument | null = await Todo.findOne({ _id: id, userId: user._id });
    
    if (!todo) {
      return Response.json(
        { error: "Todo not found" },
        { status: 404 }
      );
    }
    
    return Response.json(todo);
  } catch (error) {
    console.error('Failed to fetch todo:', error);
    return Response.json(
      { error: 'Failed to fetch todo' },
      { status: 500 }
    );
  }
}

interface UpdateTodoRequest {
  text?: string;
  completed?: boolean;
}

export async function PUT(request: NextRequest, { params }: RouteContext): Promise<Response> {
  try {
    await connectDB();
    const user = await getLoggedInUser();
    if (user instanceof Response) return user;

    const editTodoData: UpdateTodoRequest = await request.json();
    const { id } = await params;
    
    const editedTodo: TodoDocument | null = await Todo.findOneAndUpdate(
      { _id: id, userId: user._id },
      editTodoData,
      { new: true }
    );

    if (!editedTodo) {
      return Response.json(
        { error: "Todo not found" },
        { status: 404 }
      );
    }

    return Response.json(editedTodo);
  } catch (error) {
    console.error('Failed to update todo:', error);
    return Response.json(
      { error: 'Failed to update todo' },
      { status: 500 }
    );
  }
}

export async function DELETE(_: NextRequest, { params }: RouteContext): Promise<Response> {
  try {
    await connectDB();
    const user = await getLoggedInUser();
    if (user instanceof Response) return user;

    const { id } = await params;
    const result = await Todo.deleteOne({ _id: id, userId: user._id });

    if (result.deletedCount === 0) {
      return Response.json(
        { error: "Todo not found" },
        { status: 404 }
      );
    }

    return new Response(null, {
      status: 204,
    });
  } catch (error) {
    console.error('Failed to delete todo:', error);
    return Response.json(
      { error: 'Failed to delete todo' },
      { status: 500 }
    );
  }
}
