import BakedGoods from "../../../repositories/listGoods/bakedGoods/bakedGoods.js"
import code from '../../../helpers/number.js'
const getAll = async (req, res, next) => {
    try {
        const bakedGoods = await BakedGoods.getAll()
        res.json({ status: 'success', code: code.HttpCode.OK, data: { bakedGoods } })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const bakedGoods = await BakedGoods.getById(req.params.id)
        if (bakedGoods) {
            return res.json({ status: 'success', code: code.HttpCode.OK, data: { bakedGoods } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const bakedGoods = await BakedGoods.create(req.user._id, req.body)
        return res.status(code.HttpCode.CREATED).json({ status: 'success', code: code.HttpCode.CREATED, data: { bakedGoods } })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const bakedGoods = await BakedGoods.remove(req.params.id)
        if (bakedGoods) {
            res.status(code.HttpCode.NO_CONTENT).json({ status: 'success', code: code.HttpCode.NO_CONTENT, data: { bakedGoods } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const bakedGoods = await BakedGoods.update(req.params.id, req.body)
        if (bakedGoods) {
            res.status(code.HttpCode.OK).json({ status: 'success', code: code.HttpCode.OK, data: { bakedGoods } })
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