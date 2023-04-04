import { Product } from '../models/index.js'

export async function getProduct() {
    try {

        return await Product.find().limit(3)
    } catch (error) {
        console.log(error)
    }
}

export async function createProduct(product) {
    try {
        let {
            name,
            price,
            description, features,
            image,

        } = product;
        return await Product.create({
            name,
            price,
            description, features,
            image,

        });
    } catch (error) {
        console.log(error);
    }
}
export async function getPerProduct(productId) {
    try {
        // const quantity = await getInventoryPerProduct(productId)
        return await Product.findById(productId);
    } catch (error) {
        console.log(error);
    }
}

export async function updateProduct(id, update) {
    try {
        return await Product.findByIdAndUpdate(id, update);
    } catch (error) {
        console.log(error);
    }
}
export async function deleteProduct(id) {
    try {
        return await Product.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
}
export async function getMainProduct() {
    try {

        return await Product.findOne({ rank: 1 });
    } catch (error) {
        console.log(error);

    }
}