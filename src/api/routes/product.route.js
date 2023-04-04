import express from 'express'
const productRouter = express.Router()
import { productController } from '../controllers/index.js'
import uploadImg from '../utils/multer-storage-cloudinary.js'

productRouter.post('/',uploadImg.single('image'),productController.createProduct)
productRouter.get('/',productController.getProduct)
productRouter.get('/main-product',productController.getMainProduct)
productRouter.get('/:id',productController.getPerProduct)

export default productRouter
