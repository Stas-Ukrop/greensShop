import berryAndFruits from "../../../repositories/listGoods/berryAndFruits/berryAndFruits.js"
import code from '../../../helpers/number.js'

const getAll = async (req, res, next) => {
    try {
        const berryAndFruit = await berryAndFruits.getAll()
        res.json({ status: 'success', code: code.HttpCode.OK, data: { berryAndFruit } })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const berryAndFruit = await berryAndFruits.getById(req.params.id)
        if (berryAndFruit) {
            return res.json({ status: 'success', code: code.HttpCode.OK, data: { berryAndFruit } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const berryAndFruit = await berryAndFruits.create(req.user._id, req.body)
        return res.status(code.HttpCode.CREATED).json({ status: 'success', code: code.HttpCode.CREATED, data: { berryAndFruit } })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const berryAndFruit = await berryAndFruits.remove(req.params.id)
        if (berryAndFruit) {
            res.status(code.HttpCode.NO_CONTENT).json({ status: 'success', code: code.HttpCode.NO_CONTENT, data: { berryAndFruit } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const berryAndFruit = await berryAndFruits.update(req.params.id, req.body)
        if (berryAndFruit) {
            res.status(code.HttpCode.OK).json({ status: 'success', code: code.HttpCode.OK, data: { berryAndFruit } })
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