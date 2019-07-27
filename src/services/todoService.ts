import express from "express";
import {todoModel} from "./../model/todoModel";


export class TodoService{

    public static async  createTodo(req: express.Request,res: express.Response){
        try{
            let newTodoItem = new todoModel(req.body);
            await newTodoItem.save(); //This will perform mongoose operation or inserting data into table/collection
            return newTodoItem;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getAllTodo(req: express.Request, res: express.Response){
        try{
            let allTodos = await todoModel.find().exec();
            //todoModel :- table/collection
            //find() :- method to get data
            //exec() :- to run query
            return allTodos;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }
}