"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var db_1 = require("./startup/db");
var TodoApp = /** @class */ (function () {
    function TodoApp() {
        this.app = express_1.default();
        this.app.listen(3000, 'localhost', function () {
            console.log("Server is running on port 3000");
        });
        this.configBodyParser();
        db_1.Db.connectMongoDb();
    }
    TodoApp.prototype.configBodyParser = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    };
    return TodoApp;
}());
exports.todoApp = new TodoApp();
