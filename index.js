import express from "express";
import {router} from "./router/router.js";
const port = process.env.Port || 8000;
const app = express();

app.use('/api/', router);

app.listen(port, console.log('Port Running on http://localhost:' + port));