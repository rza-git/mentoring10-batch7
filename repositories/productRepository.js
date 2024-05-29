// CRUD PRODUCT
const {Product} = require("../models")

// Get All Products
const findAll = async (params) => {
    
    const data = await Product.findAll();

    return data;
}

// Get Detail Product
const findOne = async (params) => {
    const data = await Product.findOne(params);

    return data;
}

// Create Product
const create = async (params) => {

    const data = await Product.create(params, {returning: true});

    return data;
}

// Update Product
const update = async (params) => {

    const {filterOption, body} = params;

    let data = await Product.findOne(filterOption)

    if(!data)
        throw {name: "ErrorNotFound"}

    data = await data.update(body, {returning: true});

    return data;
}

// Delete product
const destroy = async (params) => {

    const data = await Product.findOne(params);

    if(!data)
        throw {name: "ErrorNotFound"}

    await data.destroy();
}

module.exports = {
    findAll,
    findOne,
    create,
    update,
    destroy
}