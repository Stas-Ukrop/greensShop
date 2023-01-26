import { isValidObjectId } from 'mongoose'
import arr from '../helpers/number.js'

export const isValid = (req, res, next) => {
    const { id } = req.params
    const isCorrectId = isValidObjectId(id)
    if (!isCorrectId) {
        try {
            return res.status(arr.HttpCode.NOT_FOUND).json({ status: 'error', code: arr.HttpCode.NOT_FOUND, message: 'Invalid credentials' })
        } catch (error) {
            next(error)
        }
    }
    next()
}

