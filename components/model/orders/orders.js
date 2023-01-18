import mongoose from 'mongoose'
const { Schema, model } = mongoose

const orderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true,
    },
    build: {
        type: String,
        required: true
    },
    orders: {
        type: Array,

    },
    owner: { name: String, age: Number },

},
    { versionKey: false, timestamps: true },
)

const Order = model('order', orderSchema)

export default Order