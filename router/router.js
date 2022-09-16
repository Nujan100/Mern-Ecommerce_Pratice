import express from "express";
import { upload } from "../controllers/controllers.js";
import {defaultController, homeController, postItemController, singleController, editController, deleteController} from "../controllers/controllers.js"
const router = express.Router();

router.get('/', defaultController);
router.get('/items', homeController);
router.post('/items/', upload.single('photo'), postItemController);
router.get('/items/:pid', singleController);
router.put('/items/:pid', upload.single('photo'), editController);
router.delete('/items/:pid', deleteController);

export {router};