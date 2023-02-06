import sweets from "../../../repositories/listGoods/sweets/sweets.js"
import code from '../../../helpers/number.js'
const getAll = async (req, res, next) => {
    try {
        const sweet = await sweets.getAll()
        res.json({ status: 'success', code: code.HttpCode.OK, data: { sweet } })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const sweet = await sweets.getById(req.params.id)
        if (sweet) {
            return res.json({ status: 'success', code: code.HttpCode.OK, data: { sweet } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const sweet = await sweets.create(req.user._id, req.body)
        return res.status(code.HttpCode.CREATED).json({ status: 'success', code: code.HttpCode.CREATED, data: { sweet } })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const sweet = await sweets.remove(req.params.id)
        if (sweet) {
            res.status(code.HttpCode.NO_CONTENT).json({ status: 'success', code: code.HttpCode.NO_CONTENT, data: { sweet } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const sweet = await sweets.update(req.params.id, req.body)
        if (sweet) {
            res.status(code.HttpCode.OK).json({ status: 'success', code: code.HttpCode.OK, data: { sweet } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

export default {
    getAll,
    getById,
    remove,
    create,
    update
}