import mongoose from "mongoose";
import Product from "../models/product.model.js";


export const getProducts = async (req, res)=>{
    try{
        const prods = await Product.find();
        res.status(200).json({
            count: prods.length,
            data: prods
        });
    }catch(error){
        console.error('Error with the request', error);
        res.status(500).json({message: error.message});
    }
};

export const getOneProduct = async (req, res)=>{
    const { id } = req.params;

    try{
        const prod =  await Product.findById(id);
        res.status(200).json({data : prod});
    }catch(error){
        console.error("Error in finding the id", error);
        res.status(404).json({"message": "Product not found"});
    }
};

export const createProduct = async (req, res)=>{
    const product = req.body;

    if(
        !product.name ||
        !product.price ||
        !product.image
    ){
        return res.status(400).json({success: false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product);

    try{
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    }catch(error){
        console.error('Error in Creating product:', error.message);
        res.status(500).json({success: false, message: 'Server Error'});
    }
};

export const updateProduct = async (req, res)=>{
    try{

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success: false, message: 'Product Not Found'})
    }

    const product = req.body;

    if(
        !product.name ||
        !product.price ||
        !product.image
    ){
        res.status(400).json({success: false, message: `Please Fill All The Required Fields:name, price and image`})
    }

    const result = await Product.findByIdAndUpdate(id, product);

    res.status(202).json({success: true, message: "Product updated successfully!!"});

    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
};

export const deleteProduct = async (req, res)=>{
    const {id} = req.params;

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, data: `Product Deleted successful`})
    }catch(error){
        console.error('Error in finding the product:', error);
        res.status(404).json({success: false, message: "Product not found"})
    }
};