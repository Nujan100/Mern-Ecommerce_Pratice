import express from "express";
import multer from "multer";
import {router} from "./router/router.js";
import bodyParser from "body-parser";
const port = process.env.Port || 8000;
const app = express();

app.use('/', router);

app.listen(port, console.log('Port Running on http://localhost:' + port));