import express from "express";
import bodyParser from "body-parser";
import {Db} from "./startup/db";
import {Routes} from "./startup/routes";
class TodoApp{
    app: express.Application;
    constructor(){
        this.app = express();
        this.app.listen(3000, 'localhost', ()=>{
            console.log("Server is running on port 3000");
        });
        Routes.configRoutes(this.app);
        this.configBodyParser();
        Db.connectMongoDb();
    }

    private configBodyParser(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:false}));
    }
}

export const todoApp = new TodoApp();