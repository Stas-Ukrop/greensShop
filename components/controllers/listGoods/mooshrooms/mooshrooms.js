import mooshrooms from "../../../repositories/listGoods/mooshrooms/mooshrooms.js"
import code from '../../../helpers/number.js'
const getAll = async (req, res, next) => {
    try {
        const mooshroom = await mooshrooms.getAll()
        res.json({ status: 'success', code: code.HttpCode.OK, data: { mooshroom } })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const mooshroom = await mooshrooms.getById(req.params.id)
        if (mooshroom) {
            return res.json({ status: 'success', code: code.HttpCode.OK, data: { mooshroom } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const mooshroom = await mooshrooms.create(req.user._id, req.body)
        return res.status(code.HttpCode.CREATED).json({ status: 'success', code: code.HttpCode.CREATED, data: { mooshroom } })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const mooshroom = await mooshrooms.remove(req.params.id)
        if (mooshroom) {
            res.status(code.HttpCode.NO_CONTENT).json({ status: 'success', code: code.HttpCode.NO_CONTENT, data: { mooshroom } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const mooshroom = await mooshrooms.update(req.params.id, req.body)
        if (mooshroom) {
            res.status(code.HttpCode.OK).json({ status: 'success', code: code.HttpCode.OK, data: { mooshroom } })
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