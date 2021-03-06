const express = require("express");
const {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todos");

const todoRouter = express.Router();

todoRouter.get("/todos", getAllTodo);

todoRouter.get("/todo", getTodoById);

todoRouter.get("/todos/completed", getCompletedTodos);

todoRouter.post("/todos", createTodo);

todoRouter.put("/todo", updateTodo);

todoRouter.delete("/delete/:id", deleteTodo);

todoRouter.put("/todos/:id", completeTodo);


module.exports = todoRouter;
