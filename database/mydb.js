import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/apidb3')
    .then(()=> console.log('Mongodb connected sucessfully'))
    .catch((err)=> console.log(err));

const itemSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    price: {type: String, required: true, trim: true},
    photo: {type: String, required: false, trim: true},
    model: {type: String, required: true, trim: true},
});

const ItemModel = mongoose.model('items', itemSchema);

export {ItemModel}