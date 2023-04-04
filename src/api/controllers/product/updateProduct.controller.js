
import { productService } from "../../services/index.js";

export default async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const {update} = req.body;
    const product = await productService.updateProduct(id,update);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error });
  }
}
