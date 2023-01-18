import Orders from '../../repositories/orders/orders.js'

const getAll = async (req, res, next) => {
    try {
        console.log('controllers')
        const getAllItems = await Orders.getAll()
        return res.status(200).json({ status: 'succes', code: 200, message: 'all ok', data: getAllItems })
    } catch (err) {
        next(err)
    }
}
const getById = async (req, res, next) => {
    try {
        const idOrder = await Orders.getById(req.params.id)

        if (idOrder) {
            return res.status(200).json({ status: 'succes', code: 200, data: idOrder })
        }
        return res.status(404).json({ status: 'Not found', code: 404, message: "e.message" })
    } catch (err) {
        next(err)
    }
}
const createOrders = async (req, res, next) => {
    try {
        const createOrder = await Orders.create(req.body)
        return res.status(200).json({ status: 'success', code: 200, data: { createOrder } })
    } catch (err) {
        next(err)
    }
}
const remove = async (req, res, next) => {
    try {
        const remove = await Orders.remove(req.params.id)
        if (remove) {
            return res.status(201).json({ status: 'succes', code: 201, data: remove })
        }
        return res.status(404).json({ status: 'error', code: 404, message: "Not found" })
    } catch (err) {
        next(err)
    }
}
const updateOrders = async (req, res, next) => {
    try {
        const createOrder = await Orders.update(req.params.id, req.body)
        return res.status(200).json({ status: 'success', code: 200, data: { createOrder } })
    } catch (err) {
        next(err)
    }
}

export default {
    getAll,
    getById,
    createOrders,
    remove,
    updateOrders
}