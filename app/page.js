"use client";
import { getAllTodos } from "./api";
import AddTask from "@/components/AddTask";
import Header from "@/components/Header";
import TodoList from "@/components/TodoList";

export default async function Home() {
  const tasks = await getAllTodos();
  //bu kullanım app router'da getServerSideProps kullanımıyla aynı. Page router kullanmam gerekirdi.
  //https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#server-side-rendering-getserversideprops
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto mt-4">
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Todo List App</h1>
          <AddTask />
        </div>
        <>
          {" "}
          <TodoList tasks={tasks} />
        </>
      </main>
    </>
  );
}
