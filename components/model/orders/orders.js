import mongoose from 'mongoose'
const { Schema, model, SchemaTypes } = mongoose

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
    building: {
        type: String,
        required: true
    },
    orders: {
        type: Array,

    },
    owner: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: 'user',
    },
},
    { versionKey: false, timestamps: true },
)

const Order = model('order', orderSchema)

export default Order
