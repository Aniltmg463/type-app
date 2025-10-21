import { NextRequest } from 'next/server';
import { getLoggedInUser } from "@/lib/auth";
import { connectDB } from "@/lib/connectDB";
import Todo from "@/models/todoModel";
import { IUser } from "@/models/userModel";

// Define interfaces
interface TodoDocument {
  id: string;
  text: string;
  completed: boolean;
}

interface CreateTodoRequest {
  text: string;
}

export async function GET(): Promise<Response> {
  try {
    await connectDB();
    const user = await getLoggedInUser();
    if (user instanceof Response) {
      return user;
    }
    
    const allTodos: TodoDocument[] = await Todo.find({ userId: user._id });

    return Response.json(
      allTodos.map(({ id, text, completed }: TodoDocument) => ({ id, text, completed }))
    );
  } catch (error) {
    console.error('Failed to fetch todos:', error);
    return Response.json(
      { error: 'Failed to fetch todos' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<Response> {
  try {
    await connectDB();
    const user = await getLoggedInUser();
    if (user instanceof Response) return user;

    const todoData: CreateTodoRequest = await request.json();
    
    if (!todoData.text || todoData.text.trim() === '') {
      return Response.json(
        { error: 'Todo text is required' },
        { status: 400 }
      );
    }

    const newTodo: TodoDocument = await Todo.create({
      text: todoData.text.trim(),
      userId: user._id,
    });

    const { id, text, completed } = newTodo;

    return Response.json(
      { id, text, completed },
      { status: 201 }
    );
  } catch (error) {
    console.error('Failed to create todo:', error);
    return Response.json(
      { error: 'Failed to create todo' },
      { status: 500 }
    );
  }
}
