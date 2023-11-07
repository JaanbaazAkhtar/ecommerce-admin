const Products = require('../models/Products')

exports.createProduct = async (req, res) => {
    try {
        const isPresent = await Products.findOne({ name: req.body.name })
        if(isPresent) {
            return res.status(405).json({ message: 'Product is already present', product: isPresent })
        }
        const product = new Products({
            name: req.body.name,
            quantity: req.body.quantity
        });
        const result = await product.save();
        res.status(200).json({message:'Product created', result: result })
    } catch(error) {
        console.log('error in creating a product ', error)
        res.status(400).json({ message: 'Error in creating a product', error: error})
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const isPresent = await Products.findOne({ _id: req.params.id })
        if(!isPresent) {
            return res.status(404).json({ message: 'Product is not present'})
        }
        const product = await Products.updateOne({ _id: req.params.id }, { quantity: req.query.number })
        res.status(200).json({ message: 'Quantity upadted', product: product })
    } catch(error) {
        console.log('error in updating a product ', error)
        res.status(400).json({ message: 'Error in updating a product', error: error})
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const isPresent = await Products.findOne({ _id: req.params.id })
        if(!isPresent) {
            return res.status(404).json({ message: 'Product is not present'})
        }
        await Products.deleteOne({ _id: req.params.id })
        res.status(200).json({ message: 'Product deleted' })
    } catch(error) {
        console.log('error in deleting a product ', error)
        res.status(400).json({ message: 'Error in deleting a product', error: error})
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Products.find()
        res.status(200).json({ products: products })
    } catch(error) {
        console.log('error in getting a product ', error)
        res.status(400).json({ message: 'Error in getting a product', error: error})
    }
}