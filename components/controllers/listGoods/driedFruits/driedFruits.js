import DriedFruits from "../../../repositories/listGoods/drieFruits/driedFruits.js"
import code from '../../../helpers/number.js'

const getAll = async (req, res, next) => {
    try {
        const driedFruits = await DriedFruits.getAll()
        res.json({ status: 'success', code: code.HttpCode.OK, data: { driedFruits } })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const driedFruits = await DriedFruits.getById(req.params.id)
        if (driedFruits) {
            return res.json({ status: 'success', code: code.HttpCode.OK, data: { driedFruits } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const driedFruits = await DriedFruits.create(req.user._id, req.body)
        return res.status(code.HttpCode.CREATED).json({ status: 'success', code: code.HttpCode.CREATED, data: { driedFruits } })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const driedFruits = await DriedFruits.remove(req.params.id)
        if (driedFruits) {
            res.status(code.HttpCode.NO_CONTENT).json({ status: 'success', code: code.HttpCode.NO_CONTENT, data: { driedFruits } })
        }
        return res.json({ status: 'error', code: code.HttpCode.NOT_FOUND, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const driedFruits = await DriedFruits.update(req.params.id, req.body)
        if (driedFruits) {
            res.status(code.HttpCode.OK).json({ status: 'success', code: code.HttpCode.OK, data: { driedFruits } })
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