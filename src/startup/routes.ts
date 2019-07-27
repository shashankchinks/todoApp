import express from "express";
export class Routes{
    constructor(){

    }

    public static configRoutes(app:express.Application):void{
        app.get('/',(req: express.Request,res: express.Response)=>{
            res.status(200).json({"success":"Server is running"});
        });
    }
}