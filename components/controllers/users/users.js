import User from '../../repositories/users/users.js'
import arr from '../../helpers/number.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv/config'

const SECRET_KEY = process.env.SECRET_KEY

const register = async (req, res, next) => {
    try {
        const user = await User.findByEmail(req.body.email)
        if (user) {
            return res.status(arr.HttpCode.CONFLICT).json({ status: 'error', code: arr.HttpCode.CONFLICT, message: 'Email is already used' })
        }
        const { id, name, email, password, role } = await User.create(req.body)
        return res.status(arr.HttpCode.CREATED).json({
            status: 'success',
            code: arr.HttpCode.CREATED,
            data: {
                id,
                name,
                email,
                password,
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
        const id = user.id
        const payload = {
            id,
            test: 'the best of the best'
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
        const user = await User.getAll()
        res.json({
            status: 'success', code: arr.HttpCode.OK, data: {
                user
            }
        })
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
export default {
    register,
    login,
    logout,
    getAll,
    getById,
    remove,
    update
}