1- Error: nodemon | Solve: download npm i nodemon
* 2- Error: require("../db"); | Solve: require("./db");
* 3- Error: Cannot find "mongose" | Solve: npm i mongoose
* 4- Error: Cannot find module './../../db/models/todos' | Solve: const todoModel = require("./../../db/models/todo");
* 5- Error: Cannot find module 'mongose' | Solve: const mongoose = require("mongoose");
* 6- Error: const todoModel = mongoose.module("Todo", todoSchema); | Solve: const todoModel = mongoose.model("Todo", todoSchema);
* 7- Error: Route.get() requires a callback function but got a [object Undefined] | Solve: module.exports
* 8- Error: Route.put() requires a callback function but got a [object Undefined] | export (updateTodo)
* 9- Error: morgan is not defined | Solve: const morgan = require("morgan");
* 10- require("dotenv").config(); and DB_URL
* 11- Error: listen EADDRINUSE: address already in use 5050; | Solve: PORT=5050 without ;
* 12-   task: { type: Boolean, required: true }, |  type: String
* 13- createTodo route | todo change to task
* 14- todoRouter.put("/todos/:id", completeTodo); |  put it end of  file

