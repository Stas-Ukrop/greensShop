import greens from "../../../repositories/listGoods/greens/greens.js"
import code from '../../../helpers/number.js'
const getAll = async (req, res, next) => {
    try {
        const green = await greens.getAll()
        res.json({ status: 'success', code: code.HttpCode.OK, data: { green } })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const green = await greens.getById(req.params.id)
        if (green) {
            return res.json({ status: 'success', code: code.HttpCode.OK, data: { green } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const green = await greens.create(req.user._id, req.body)
        return res.status(code.HttpCode.CREATED).json({ status: 'success', code: code.HttpCode.CREATED, data: { green } })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const green = await greens.remove(req.params.id)
        if (green) {
            res.status(code.HttpCode.NO_CONTENT).json({ status: 'success', code: code.HttpCode.NO_CONTENT, data: { green } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const green = await jamAndPickles.update(req.params.id, req.body)
        if (green) {
            res.status(code.HttpCode.OK).json({ status: 'success', code: code.HttpCode.OK, data: { green } })
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