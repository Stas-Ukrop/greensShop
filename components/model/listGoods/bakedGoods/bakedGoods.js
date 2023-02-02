import mongoose from "mongoose"

const { Schema, model, SchemaTypes } = mongoose

const bakedGoodsSchema = new Schema({
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

const BakedGood = model('bakedGood', bakedGoodsSchema)

export default BakedGood