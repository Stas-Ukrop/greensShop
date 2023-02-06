import jamAndPickles from "../../../repositories/listGoods/jamAndPickles/jamAndPickles.js"
import code from '../../../helpers/number.js'
const getAll = async (req, res, next) => {
    try {
        const jamAndPickle = await jamAndPickles.getAll()
        res.json({ status: 'success', code: code.HttpCode.OK, data: { jamAndPickle } })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const jamAndPickle = await jamAndPickles.getById(req.params.id)
        if (jamAndPickle) {
            return res.json({ status: 'success', code: code.HttpCode.OK, data: { jamAndPickle } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const jamAndPickle = await jamAndPickles.create(req.user._id, req.body)
        return res.status(code.HttpCode.CREATED).json({ status: 'success', code: code.HttpCode.CREATED, data: { jamAndPickle } })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const jamAndPickle = await jamAndPickles.remove(req.params.id)
        if (jamAndPickle) {
            res.status(code.HttpCode.NO_CONTENT).json({ status: 'success', code: code.HttpCode.NO_CONTENT, data: { jamAndPickle } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const jamAndPickle = await jamAndPickles.update(req.params.id, req.body)
        if (jamAndPickle) {
            res.status(code.HttpCode.OK).json({ status: 'success', code: code.HttpCode.OK, data: { jamAndPickle } })
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