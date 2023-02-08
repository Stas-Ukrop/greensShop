import milks from "../../../repositories/listGoods/milks/milks.js"
import code from '../../../helpers/number.js'

const getAll = async (req, res, next) => {
    try {
        const milk = await milks.getAll()
        res.json({ status: 'success', code: code.HttpCode.OK, data: { milk } })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const milk = await milks.getById(req.params.id)
        if (milk) {
            return res.json({ status: 'success', code: code.HttpCode.OK, data: { milk } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const milk = await milks.create(req.user._id, req.body)
        return res.status(code.HttpCode.CREATED).json({ status: 'success', code: code.HttpCode.CREATED, data: { milk } })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const milk = await milks.remove(req.params.id)
        if (milk) {
            res.status(code.HttpCode.NO_CONTENT).json({ status: 'success', code: code.HttpCode.NO_CONTENT, data: { milk } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const milk = await milks.update(req.params.id, req.body)
        if (milk) {
            res.status(code.HttpCode.OK).json({ status: 'success', code: code.HttpCode.OK, data: { milk } })
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