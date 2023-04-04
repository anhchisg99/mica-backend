import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ObjectId = mongoose.Types.ObjectId;


const orderSchema = new Schema({
    state:String,
    customer_name:String,
    shipping_address:{
        street:String,
        city:String,
        full_address:String
    },
    
    email:String,
    phone:String,
    line_items:Array,
    quotes:String,
    // userId:{
    //     type:ObjectId,
    //     ref:'Customer'
    // },
    // shipping:Ojbect,
    // payment:Ojbect
})

const Orders = mongoose.model('Orders',orderSchema)
export default Orders