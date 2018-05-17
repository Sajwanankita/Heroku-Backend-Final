"use strict";
/**
 * @author Ankita Kumari
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));

app.use(function  (req,  res,  next) {
     res.header("Access-Control-Allow-Origin",  "*");
     res.setHeader('Access-Control-Allow-Methods',  'GET, POST, OPTIONS, PUT, PATCH, DELETE');
     res.header("Access-Control-Allow-Headers",  "Origin, X-Requested-With, Content-Type, Accept");
     next();
}); 
 


app.use('/', api_1.default);
app.use((req, res) => {
    res.status(404).send('Not Found');
});
app.listen(process.env.PORT || 8000, () => {
    console.log("Server is running at http://localhost:8000");
});
