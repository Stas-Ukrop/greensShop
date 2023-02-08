import meat from "../../../repositories/listGoods/meat/meat.js"
import code from '../../../helpers/number.js'

const getAll = async (req, res, next) => {
    try {
        const result = await meat.getAll()
        res.json({ status: 'success', code: code.HttpCode.OK, data: { result } })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const result = await meat.getById(req.params.id)
        if (result) {
            return res.json({ status: 'success', code: code.HttpCode.OK, data: { result } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const result = await meat.create(req.user._id, req.body)
        return res.status(code.HttpCode.CREATED).json({ status: 'success', code: code.HttpCode.CREATED, data: { result } })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const result = await meat.remove(req.params.id)
        if (result) {
            res.status(code.HttpCode.NO_CONTENT).json({ status: 'success', code: code.HttpCode.NO_CONTENT, data: { result } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const result = await meat.update(req.params.id, req.body)
        if (result) {
            res.status(code.HttpCode.OK).json({ status: 'success', code: code.HttpCode.OK, data: { result } })
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