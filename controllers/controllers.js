import { ItemModel } from "../database/mydb.js";
import express from "express";
import multer from "multer";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

// for price upload
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
        // upload event - . track?
        //file handel -> move to ../public/uploads -> manually (file handle using js)
    },
    filename: (req, file, cb) => {
        // cb(null, Date.now() + "--" + file.originalname);
        const newFileName = Date.now() + "--" + file.originalname;
        cb(null, newFileName);
        // console.log(file.originalname, "=>", newFileName);
    },
});

const upload = multer({ storage: fileStorageEngine });

const defaultController = (req, res) => { res.send("<h1>Hello</h1>") };

const homeController = async (req,res) =>{
    const items = await ItemModel.find();
    res.status(200).send(items);
}

const postItemController = (req, res)=>{
const data = { name: req.body.name, model: req.body.model, price: req.body.price, photo: req.file.filename };
console.log(data); 
const Item = new ItemModel(data);
Item.save((err, item) => {
    if (err) {
        res.send(err);
        console.log(err);
    }
    else { res.json(item); }
});

}

export { defaultController,homeController, postItemController, upload };