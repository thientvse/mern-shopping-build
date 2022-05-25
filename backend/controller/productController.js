const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});

        req.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error"});        
    }
};


const getProductById= async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);

        req.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error"});        
    }
};

module.exports = {
    getAllProducts,
    getProductById

}