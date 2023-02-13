import User from '../../repositories/users/users.js'
import arr from '../../helpers/number.js'
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import dotenv from 'dotenv/config'
import path from 'path'
import fs from 'fs/promises'
import { product_dir } from '../../config/upload.js'

const SECRET_KEY = process.env.SECRET_KEY
const SALT_WORK = Number(process.env.SALT_WORK)

const register = async (req, res, next) => {
    try {
        const user = await User.findByEmail(req.body.email)
        if (user) {
            return res.status(arr.HttpCode.CONFLICT).json({ status: 'error', code: arr.HttpCode.CONFLICT, message: 'Email is already used' })
        }
        const { name, email, password, role } = req.body
        const salt = await bcryptjs.genSalt(SALT_WORK)
        const pas = await bcryptjs.hash(password, salt)
        await User.create({ name, email, password: pas, role })
        return res.status(arr.HttpCode.CREATED).json({
            status: 'success',
            code: arr.HttpCode.CREATED,
            data: {
                name,
                email,
                pas,
                role
            }
        })
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findByEmail(req.body.email)
        const isValidPassword = await user?.isValidPassword(req.body.password)
        if (!user || isValidPassword) {

            return res.status(arr.HttpCode.UNAUTHORIZED).json({ status: 'error', code: arr.HttpCode.UNAUTHORIZED, message: 'Invalid credentials' })
        }
        const { id } = user
        const payload = {
            id
        }
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '2h' })
        await User.updateToken(id, token)
        return res.json({
            status: 'success', code: arr.HttpCode.OK, data: {
                token
            }
        })
    } catch (error) {
        next(error)
    }
}

const logout = async (req, res, next) => {
    try {
        const { id } = req.user
        await User.updateToken(id, null)
        res.status(204).json()
    } catch (error) {
        next(error)
    }
}

const getAll = async (req, res, next) => {
    try {
        const users = await User.getAll()
        res.json({ status: 'success', code: 200, data: { users } })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const user = await User.getById(req.params.id)
        if (user) {
            return res.json({ status: 'success', code: 200, data: { user } })
        }
        return res.json({ status: 'error', code: 404, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const user = await User.remove(req.params.id)
        if (user) {
            res.status(201).json({ status: 'success', code: 204, data: { user } })
        }
        return res.json({ status: 'error', code: 404, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const user = await User.update(req.params.id, req.body)
        if (user) {
            res.status(201).json({ status: 'success', code: 204, data: { user } })
        }
        return res.json({ status: 'error', code: 404, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}
const avatar = async (req, res) => {
    const { path: tempUpload, originalname } = req.file
    console.log(tempUpload)
    const resultUpload = path.join(product_dir, originalname)
    console.log(resultUpload)
    try {
        await fs.rename(tempUpload, resultUpload)
        await User.update(req.user._id, req.body)
        res.status(200).json({ status: 'success', code: 200, data: { resultUpload } })
    } catch (error) {
        await fs.unlink(tempUpload)
        res.status(404).json({ status: 'error', code: 404, message: 'Invalid credentials' })
    }
}
export default {
    register,
    login,
    logout,
    getAll,
    getById,
    remove,
    update,
    avatar
}