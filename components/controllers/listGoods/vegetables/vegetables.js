import Vegetables from "../../../repositories/listGoods/vegetables/vegetables.js"
import code from '../../../helpers/number.js'
const getAll = async (req, res, next) => {
    try {
        const vegetables = await Vegetables.getAll()
        res.json({ status: 'success', code: code.HttpCode.OK, data: { vegetables } })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const vegetables = await Vegetables.getById(req.params.id)
        if (vegetables) {
            return res.json({ status: 'success', code: code.HttpCode.OK, data: { vegetables } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const vegetables = await Vegetables.create(req.user._id, req.body)
        return res.status(code.HttpCode.CREATED).json({ status: 'success', code: code.HttpCode.CREATED, data: { vegetables } })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const vegetables = await Vegetables.remove(req.params.id)
        if (vegetables) {
            res.status(code.HttpCode.NO_CONTENT).json({ status: 'success', code: code.HttpCode.NO_CONTENT, data: { vegetables } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const vegetables = await Vegetables.update(req.params.id, req.body)
        if (vegetables) {
            res.status(code.HttpCode.OK).json({ status: 'success', code: code.HttpCode.OK, data: { vegetables } })
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