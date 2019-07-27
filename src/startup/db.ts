import mongoose from "mongoose";
export class Db{
    private static connectionString: string = "mongodb://localhost:27017/TodoApp";
    public static connectMongoDb(){
        mongoose.connect(this.connectionString,{useNewUrlParser:true}).then(() => {
            console.log("Db connection success");
        }).catch(err => {
            console.log("Db connection failure");
            console.log(err);
        });
    }
}
