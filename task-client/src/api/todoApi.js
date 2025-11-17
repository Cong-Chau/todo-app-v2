import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5020/api",
});

export const getTodos = (status) => api.get("/todo", { params: { status } });

export const addTodo = (todo) => api.post("/todo", todo);

export const updateTodo = (id, todo) => api.put(`/todo/${id}`, todo);

export const deleteTodo = (id) => api.delete(`/todo/${id}`);

export default api;
