const BASE_URL = "https://64ef02cb219b3e2873c3c8a3.mockapi.io";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchData(path) {
  await delay(1000);

  try {
    const res = await fetch(`${BASE_URL}${path}`);
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}

export async function fetchGenres() {
  try {
    const res = await fetchData("/tasks");
    console.log("res", res);
    return res;
  } catch (error) {
    throw new Error("Error happened while fetching genres", error);
  }
}

export const addTodo = async (todo) => {
  const res = await fetch(`${baseUrl}/tasks`, {
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
  const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
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
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: "DELETE",
  });
};
