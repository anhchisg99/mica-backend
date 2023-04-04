import { productService } from "../../services/index.js";
// import {newLocationString} from '../../utils/index.js'

export default async function createProduct(req, res) {
  try {
    const {
      name,
      price, description, features

    } = req.body;
    let image = req.file.path
    // image = newLocationString(image)
    console.log(image)
    if (!name && !price) {
      return res.stutus(401).json({ error: "not found" });
    }
    const product = await productService.createProduct({ name, price, image, description, features });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error });
  }
}
