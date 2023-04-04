import { productService } from "../../services/index.js";

export default async function getMainProduct(req, res) {
    try {

        const product = await productService.getMainProduct();
        res.status(200).json(product);

    } catch (error) {

        res.status(200).json(product);

    }
}