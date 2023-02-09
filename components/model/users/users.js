import mongoose from 'mongoose'
import bcryptjs from 'bcryptjs'
import dotenv from 'dotenv/config'
import role from '../../helpers/number.js'
const SALT_WORK = Number(process.env.SALT_WORK)
const { Schema, model } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        minlength: 2,
        default: 'Guest'
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            const re = /\S+@\S+\.\S+/g
            return re.test(String(value).toLowerCase())
        }
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [
            role.role.guest, role.role.user, role.role.admin
        ],
        default: role.role.user
    },
    token: {
        type: String,
        default: null
    },
    image: {
        type: String,
    }
}, {
    versionKey: false,
    timestamps: true
},)

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        const salt = await bcryptjs.getSalt(process.env.SALT_WORK)
        this.password = await bcryptjs.hash(this.password, salt)
    }
    next()
})

userSchema.methods.isValidPassword = async function (password) {
    const salt = await bcryptjs.genSalt(SALT_WORK)
    const pas = await bcryptjs.hash(password, salt)
    return await bcryptjs.compare(pas, this.password)
}

const User = model('user', userSchema)

export default User