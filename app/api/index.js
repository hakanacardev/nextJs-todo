const BASE_URL = "https://64ef02cb219b3e2873c3c8a3.mockapi.io";
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms)); // sorun çıakrtıyor çözemedim 
}
export const getAllTodos = async () => {
  const res = await fetch(`${BASE_URL}/tasks`, { cache: "no-cache" });
  // app router kullanıdğım için getStatickProps kullanılmıyor. Onun yerine istek kısmında cache belirtmek yeterli.
  //https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#static-site-generation-getstaticprops
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
