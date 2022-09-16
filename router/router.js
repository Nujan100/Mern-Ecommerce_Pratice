import express from "express";
import { upload } from "../controllers/controllers.js";
import {defaultController, homeController, postItemController} from "../controllers/controllers.js"
const router = express.Router();

router.get('/', defaultController);
router.get('/home', homeController);
router.post('/postitem/', upload.single('photo'), postItemController);

export {router};