import mongoose from "mongoose";
const Schema = mongoose.Schema;
import { nodeMailer } from "../utils/index.js";
const ObjectId = mongoose.Types.ObjectId;


const orderSchema = new Schema({
    state: String,
    customer_name: String,
    shipping_address: {
        street: String,
        city: String,
        full_address: String
    },

    email: String,
    phone: String,
    line_items: Array,
    quotes: String,
    // userId:{
    //     type:ObjectId,
    //     ref:'Customer'
    // },
    // shipping:Ojbect,
    // payment:Ojbect
}, {
    timestamps: true
})
orderSchema.pre('save', async function (next) {
    let mailOptions = {
        from: 'anhchictw311@gmail.com',
        to: 'cuongcuoi1010@gmail.com',
        subject: 'Có đơn hàng đang tới ...',
        text: "Customer: " + this.customer_name + " Phone: " + this.phone + "Cart: " + " link: " + this.quotes
    }
    try {
        nodeMailer.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                next()

            }
        });
    } catch (error) {
        next(error)
    }
})

const Orders = mongoose.model('Orders', orderSchema)
export default Orders