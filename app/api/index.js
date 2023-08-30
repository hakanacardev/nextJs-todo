const BASE_URL = "https://64ef02cb219b3e2873c3c8a3.mockapi.io";

export const getAllTodos = async () => {
  const res = await fetch(`${BASE_URL}/tasks`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};

export const addTodo = async (todo) => {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const editTodo = async (todo) => {
  const res = await fetch(`${BASE_URL}/tasks/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await res.json();
  return updatedTodo;
};

export const deleteTodo = async (id) => {
  await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });
};
