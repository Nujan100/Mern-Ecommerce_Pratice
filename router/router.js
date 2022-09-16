import express from "express";
import {defaultController, homeController} from "../controllers/controllers.js"
const router = express.Router();

router.get('/', defaultController);
router.get('/home', homeController);

export {router};