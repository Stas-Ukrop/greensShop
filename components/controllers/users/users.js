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

export default { register, login, logout }