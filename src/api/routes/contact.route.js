import express from 'express'
const contactRoute = express.Router()
import {contactController} from '../controllers/index.js'

contactRoute.post('/',contactController.createContact)

export default contactRoute