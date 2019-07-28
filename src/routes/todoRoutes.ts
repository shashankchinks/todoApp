import { Router } from "express";
import { TodoController } from "./../controller/todoController";
let todoControllerObj = new TodoController();
export const todoRoutes: Router = Router();
todoRoutes.post('/create', todoControllerObj.createTodo);
todoRoutes.get('/',todoControllerObj.getAllTodo);
todoRoutes.get('/getByName',todoControllerObj.getTodoByName);
todoRoutes.get('/:todoId',todoControllerObj.getTodoById);
todoRoutes.put('/update/:todoId',todoControllerObj.updateTodoById);