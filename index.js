import express from "express";
import multer from "multer";
import {router} from "./router/router.js";
import bodyparser from "body-parser";
const port = process.env.Port || 8000;
const app = express();
import {join } from 'path';

app.use(express.static(join(process.cwd(), 'public')));
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());
app.use('/api/', router);

app.listen(port, console.log('Port Running on http://localhost:' + port));