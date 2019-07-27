import mongoose from "mongoose";

//schema for Todo table/collection
const todoSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: String,
    createdDate: {type: Date, default:Date.now},
    completed: {type:Boolean, default:false}
});
//default:Date.now :- dafault value for fields
//name :- Field/column name of table
//{type:String, required:true} :- Type of field

//Register table/collection with database
export const todoModel = mongoose.model('todo',todoSchema); 
//collection name :- 'todo'
//schema of collection :- todoSchema