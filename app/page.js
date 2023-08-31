"use client";
import { useEffect, useState } from "react";
import { getAllTodos } from "./api";
import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList";
import Header from "@/components/Header";

export default async function Home() {
  const tasks = await getAllTodos();
  /* const user = await localStorage.getItem("user");
  console.log("user", JSON.parse(user)); */
  return (
    <>
      <Header />
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
    </>
  );
}
