"use client";
import { useEffect, useState } from "react";
import { getAllTodos } from "./api";
import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getAllTodos();
      setTasks(data);
    })();
  });
  console.log("tasks", tasks);
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>
        <AddTask tasks={tasks} />
      </div>
      <>
        {" "}
        <TodoList tasks={tasks} />
      </>
    </main>
  );
}
