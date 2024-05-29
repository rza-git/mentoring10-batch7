// CRUD PRODUCT
const productRepository = require("../repositories/productRepository.js")

// Get All Products
const findAll = async (params) => {
    
    const data = await productRepository.findAll();

    return data;
}

// Get Detail Product
const findOne = async (params) => {

    const {id} = params;

    const filterOption = {
        where: {
            id: +id
        }
    }

    const data = await productRepository.findOne(filterOption);

    if(!data) {
        throw {name: "ErrorNotFound"}
    }

    return data;
}

// Create Product
const create = async (params) => {

    const data = await productRepository.create(params)
    return data;
}

// Update Product
const update = async (params) => {

    const {id, body} = params;

    const filterOption = {
        where: {
            id: +id
        }
    }

    const updateParams = {
        filterOption,
        body
    }

    const data = await productRepository.update(updateParams);

    return data;
}

// Delete product
const destroy = async (params) => {

    const {id} = params;

    // convert string ke integer +id
    const filterOption = {
        where: {
            id: +id
        }
    }

    await productRepository.destroy(filterOption);


}

const uploadImage = async (params) => {

    const {file} = params;
    
    if(!file)
        throw {name: "InvalidFile"}
    
        const allowedExtensions = ["image/png", "image/jpeg", "image/jpg", "image/webp"];   
    
    if(allowedExtensions.includes(file.mimetype)) {
        const imageUrl = `http://localhost:3000/api/images/${file.filename}`
        return imageUrl;
    } else {
        throw {name: "InvalidExt"}
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