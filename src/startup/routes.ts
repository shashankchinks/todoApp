import express from "express";
import {todoRoutes} from "./../routes/todoRoutes";


export class Routes{
    constructor(){

    }

    public static configRoutes(app:express.Application):void{
        app.get('/',(req: express.Request,res: express.Response)=>{
            res.status(200).json({"success":"Server is running"});
        });

        app.use('/todo',todoRoutes);
        //Two endpoint will generate :- 
        //1.localhost:3000/todo/create
        //2.localhost:3000/todo*
    }
}