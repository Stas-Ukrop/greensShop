import arr from '../helpers/number.js'

export const isAdmin = (req, res, next) => {
    const { role } = req.user
    if (role !== 'admin') {
        try {
            return res.status(arr.HttpCode.NOT_FOUND).json({ status: 'error', code: arr.HttpCode.NOT_FOUND, message: 'Invalid credentials' })
        } catch (error) {
            next(error)
        }
    }
    next()
}