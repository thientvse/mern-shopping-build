require('dotenv').config();

const productsData = require('./data/products');
const connectDb = require('./config/db');
const Product = require('./models/Product');


connectDb();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(productsData);

        console.log("Data Import Success");

        process.exit();
    } catch (error) {
        console.log("Error import data");
        process.exit(1);
    }
};

importData();
