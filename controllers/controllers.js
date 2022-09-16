import { ItemModel } from "../database/mydb.js";

const defaultController = (req, res) => { res.send("<h1>Hello</h1>") };

const homeController = async (req,res) =>{
    const items = await ItemModel.find();
    res.status(200).send(items);
}

const postItemController = async (req, res)=>{
    var {name, price, photo , model} = req.params;
    const item = new ItemModel(name, price, model, photo)
    item.save().then(data=>{
        response.status(201).send({'status':true, 'data':data});
    })
    .catch(err=>{
        response.status(500).send({status:false});
    });   
}

export { defaultController,homeController, postItemController };