import drinks from "../../../repositories/listGoods/drinks/drinks.js"
import code from '../../../helpers/number.js'

const getAll = async (req, res, next) => {
    try {
        const drink = await drinks.getAll()
        res.json({ status: 'success', code: code.HttpCode.OK, data: { drink } })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const drink = await drinks.getById(req.params.id)
        if (drink) {
            return res.json({ status: 'success', code: code.HttpCode.OK, data: { drink } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const drink = await drinks.create(req.user._id, req.body)
        return res.status(code.HttpCode.CREATED).json({ status: 'success', code: code.HttpCode.CREATED, data: { drink } })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const drink = await drinks.remove(req.params.id)
        if (drink) {
            res.status(code.HttpCode.NO_CONTENT).json({ status: 'success', code: code.HttpCode.NO_CONTENT, data: { drink } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const drink = await drinks.update(req.params.id, req.body)
        if (drink) {
            res.status(code.HttpCode.OK).json({ status: 'success', code: code.HttpCode.OK, data: { drink } })
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