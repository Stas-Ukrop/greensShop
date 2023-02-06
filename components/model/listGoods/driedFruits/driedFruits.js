import mongoose from "mongoose"

const { Schema, model, SchemaTypes } = mongoose

const driedFruitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    mass: {
        type: String,
        required: true,
    },
    owner: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: 'user',
    },
},
    { versionKey: false, timestamps: true },
)

const DriedFruit = model('driedFruit', driedFruitSchema)

export default DriedFruit