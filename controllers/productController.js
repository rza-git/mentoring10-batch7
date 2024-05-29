// CRUD PRODUCT
const productService = require("../services/productService.js")

// Get All Products
const findAll = async (req, res, next) => {
    try {
        const data = await productService.findAll();

        res.status(200).json(data)
    } catch(err) {
        next(err);
    }
}

// Get Detail Product
const findOne = async (req, res, next) => {
    try {
        const data = await productService.findOne(req.params);

        res.status(200).json(data);
    } catch(err) {
        next(err);
    }
}

// Create Product
const create = async (req, res, next) => {
    try {

        const data = await productService.create(req.body);

        res.status(201).json(data);
    } catch(err) {
        next(err);
    }
}

// Update Product
const update = async (req, res, next) => {
    try {

        const params = {
            id: req.params.id,
            body: req.body
        }
        const data = await productService.update(params);

        res.status(200).json(data)
    } catch(err) {
        next(err);
    }
}

// Delete product
const destroy = async (req, res, next) => {
    try {
        
        await productService.destroy(req.params);

        res.status(200).json({message: "Product deleted..."})
    } catch(err) {
        next(err);
    }
}

const uploadImage = async (req, res, next) => {
    try {
        const data = await productService.uploadImage({file: req.file});

        res.status(200).json({
            message: "Upload success",
            url: data
        })
    } catch(err) {
        next(err);
    }
}

module.exports = {
    findAll,
    findOne,
    create,
    update,
    destroy,
    uploadImage
}