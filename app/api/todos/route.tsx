import { NextRequest } from 'next/server';
import { connectDB } from "@/lib/connectDB";
import Todo from "@/models/todoModel";

// Define the Todo interface
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
    const allTodos: TodoDocument[] = await Todo.find();

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

    const todo: CreateTodoRequest = await request.json();
    const { id, text, completed }: TodoDocument = await Todo.create({ text: todo.text });

    return Response.json(
      { id, text, completed },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error('Failed to create todo:', error);
    return Response.json(
      { error: 'Failed to create todo' },
      { status: 500 }
    );
  }
}
