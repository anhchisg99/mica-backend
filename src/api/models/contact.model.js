import mongoose from 'mongoose'

const Schema = mongoose.Schema

const contactSchema = new Schema({
    name:String,
    link:String
})

const Contact = mongoose.model('Contact',contactSchema)

export default Contact