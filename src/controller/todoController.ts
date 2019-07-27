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
}