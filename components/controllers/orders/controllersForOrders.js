import Orders from "../../repositories/orders/orders.js"

const getAll = async (req, res, next) => {
    try {
        const orders = await Orders.getAll()
        res.json({ status: 'success', code: 200, data: { orders } })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const order = await Orders.getById(req.params.id)
        if (order) {
            return res.json({ status: 'success', code: 200, data: { order } })
        }
        return res.json({ status: 'error', code: 404, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const order = await Orders.create(req.user._id, req.body)
        res.status(201).json({ status: 'success', code: 201, data: { order } })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const order = await Orders.remove(req.params.id)
        if (order) {
            res.status(201).json({ status: 'success', code: 204, data: { order } })
        }
        return res.json({ status: 'error', code: 404, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const order = await Orders.update(req.params.id, req.body)
        if (order) {
            res.status(201).json({ status: 'success', code: 204, data: { order } })
        }
        return res.json({ status: 'error', code: 404, message: 'Not found' })
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