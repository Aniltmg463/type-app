"use client";

import { useEffect, useState } from "react";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { useRouter } from "next/navigation";

// Define the Todo interface
interface Todo {
  id: string | number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const router = useRouter();
  const [todos, setTodos] = useState<Todo[]>([]);
  const { theme = "dark", setTheme } = useTheme();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    const data = await response.json();
    if (response.status === 401) {
      return router.push("/login");
    }
    if (!data.error) {
      setTodos(data.reverse());
    }
  };

  // Add new todo
  const addTodo = async (text: string): Promise<void> => {
    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      const newTodo: Todo = await response.json();
      setTodos([newTodo, ...todos]);
    } catch (error) {
      console.error('Failed to add todo:', error);
    }
  };

  // Delete todo
  const deleteTodo = async (id: string | number): Promise<void> => {
    const response = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });

    if (response.status === 204) {
      fetchTodos();
    }
  };

  // Toggle todo completion
  const toggleTodo = async (id: string | number): Promise<void> => {
    try {
      const todo = todos.find((todo) => todo.id === id);
      if (!todo) return;
      
      const response = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !todo.completed }),
      });

      if (response.status === 200) {
        fetchTodos();
      }
    } catch (error) {
      console.error('Failed to toggle todo:', error);
    }
  };

  // Update todo text
  const updateTodo = async (id: string | number, newText: string): Promise<void> => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newText }),
      });

      if (response.status === 200) {
        fetchTodos();
      }
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6">
      <div className="w-full max-w-lg">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Todo App
          </h1>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
        </header>

        <TodoForm addTodo={addTodo} />

        <main className="mt-6">
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          />
        </main>
      </div>
    </div>
  );
}
