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
            //find() :- method to get all data/records from table , similar to select * from table
            //exec() :- to run query
            return allTodos;
        }
        catch(err){
            console.log(err);
            return err;
        }
    }

    public static async getTodoByName(req: express.Request, res: express.Response){
        try {
            let todoByName = await todoModel.findOne({"name":req.query.name}).exec();
            return todoByName;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async getTodoById(req: express.Request, res: express.Response){
        try {
            let todoById = await todoModel.findById(req.params.todoId).exec();
            // let todoById = await todoModel.findOne({"_id":req.params.todoId}).exec();
            return todoById;  
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    public static async updateTodoById(req: express.Request, res: express.Response){
        try {
            let updateTodoById: any = await todoModel.findById(req.params.todoId).exec();
            updateTodoById.description = req.body.description;
            updateTodoById.completed = req.body.completed;
            updateTodoById.name = req.body.name;
            await updateTodoById.save();
            return updateTodoById;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}