import { Product } from "../models/product.js";


//fetch all products
const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({
            total_items: products.length,
            status: true,
            message: 'fetched sucessfully',
            products: products
        })
    } catch (error) {
        console.log("Something went wrong: ", error);
        res.status(400).send("Failed to fetch data", error);
    }
}

//fetch 1 product
const getOneProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if(product) {
            return res.status(200).json({
                status: true,
                message: 'fetched sucessfully',
                products: product
            })
        } else {
            return res.status(200).json({
                status: false,
                message: 'Product not found'
            })
        }
    } catch (error) {
        console.log('Failed to fetch data', error);
    }
}

//create a new product
const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create({...req.body});
        if (newProduct) {
            return res.status(200).json({
                status: true,
                message: 'Product created sucessfully',
                products:newProduct
            })
        } else {
            return res.status(400).json({
                status:false,
                message: 'Failed to create product'
            })
        } 
    } catch (error) {
        console.log("error in creating product", error);
    }
}

//update a product
const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const { price, quantity } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(id, {
            price:price,
            quantity:quantity,
            updated_at:Date.now()
        });

        if (updatedProduct) {
            return res.status(201).json({
                status:true,
                message: 'Product updated',
                products: updatedProduct
            })
        } else {
            return res.send(400).json({
                status: false,
                message: 'Failed to update product'
            })
        }
    } catch (error) {
        console.log('update failed ', error);
    }
}

const deleteProduct = async (req, res) =>{
    try {
        const { id } =req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (deletedProduct) {
            return res.status(201).json({
                status:true,
                message: "Product deleted sucessfully"
            })
        } else {
            return res.status(400).json({
                status: false,
                message: "Failed to delete"
            })
        }
    } catch (error) {
        console.log('Somthing went wrong: ', error);
        res.status(400).send('Failed to delete data')
    }
}

export {
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
    createProduct
}