import { NextRequest } from 'next/server';
import Todo from "@/models/todoModel";
import { connectDB } from "@/lib/connectDB";

// Define interfaces
interface TodoDocument {
  id: string;
  text: string;
  completed: boolean;
}

interface RouteContext {
  params: Promise<{ id: string }>;
}

interface UpdateTodoRequest {
  text?: string;
  completed?: boolean;
}

export async function GET(_: NextRequest, { params }: RouteContext): Promise<Response> {
  try {
    await connectDB();

    const { id } = await params;
    const todo: TodoDocument | null = await Todo.findById(id);
    
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

export async function PUT(request: NextRequest, { params }: RouteContext): Promise<Response> {
  try {
    await connectDB();
    
    const editTodoData: UpdateTodoRequest = await request.json();
    const { id } = await params;
    
    const editedTodo: TodoDocument | null = await Todo.findByIdAndUpdate(
      id, 
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
    
    const { id } = await params;
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
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
