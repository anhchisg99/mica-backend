import mongoose from 'mongoose'
const Schema = mongoose.Schema
// import mongodb_connection from '../helpers/connection_mongodb.js'
const ObjectId = Schema.Types.ObjectId

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "you forget typing item name ..."],
    },
    shortname: {
        type: String,
    },
    price: Number,
    sku: Number,

    image: String,
    relativeImg: String,

    description: String,
    features:Array,
    rank:{
        // required:true,
        type:Number,
        default:0
    }

})
const Product = mongoose.model('Product', productSchema)


export default Product