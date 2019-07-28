import express from "express"
import {TodoService} from './../services/todoService';


export class TodoController{

    public async createTodo(req: express.Request,res: express.Response){
        let result = await TodoService.createTodo(req,res);
        res.json(result);
    }

    public async getAllTodo(req: express.Request, res: express.Response){
        let result = await TodoService.getAllTodo(req,res);
        res.json(result);
    }

    public async getTodoByName(req: express.Request, res: express.Response){
        console.log(req.query);
        let result = await TodoService.getTodoByName(req,res);
        res.json(result);
    }

    public async getTodoById(req: express.Request, res: express.Response){
        let result = await TodoService.getTodoById(req,res);
        res.json(result);
    }

    public async updateTodoById(req: express.Request, res: express.Response){
        let result = await TodoService.updateTodoById(req,res);
        res.json(result);
    }
}