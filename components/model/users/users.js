import mongoose from 'mongoose'
const { Schema, model } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },


},
    { versionKey: false, timestamps: true },
)

const User = model('user', userSchema)

export default User