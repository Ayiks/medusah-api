import { stocks } from "../models/stock.js";

//GET STOCKS
const getAllStocks = async (req, res) => {
    try {
        const stockList = await stocks.find({});
        return res.json(stockList)
    } catch (error) {
        console.log('Somthing went wrong: ', error);
        res.status(400).send('Failed to fetch data', error)
    }
}

//CREATE NEW STOCK
const createStock = async (req, res) => {
    try {
        const newStock = await stocks.create({ ...req.body });
        return res.json(newStock);
    } catch (error) {
        console.log('Somthing went wrong: ', error);
        res.status(400).send('Failed to create data')
    }
}


//UPDATE A STOCK
const updateStock = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedStock = await stocks.findByIdAndUpdate(id, { ...req.body }, { new: true });
        return res.json(updatedStock);
    } catch (error) {
        console.log('Somthing went wrong: ', error);
        res.status(400).send('Failed to update data')
    }
}

//DELETE A STOCK
const deleteStock = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await stocks.findByIdAndDelete(id);
        return res.send('category was deleted')

    } catch (error) {
        console.log('Somthing went wrong: ', error);
        res.status(400).send('Failed to delete data')
    }
}

export {
    getAllStocks,
    createStock,
    updateStock,
    deleteStock,
}
