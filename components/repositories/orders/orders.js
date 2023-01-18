import Order from '../../model/orders/orders.js'

const getAll = async () => {
    const result = await Order.find()
    return result
}

const getById = async (id) => {
    const results = await Order.findOne({ _id: id })
    return results
}

const remove = async (id) => {
    const result = await Order.findOneAndRemove({ _id: id })
    return result
}

const create = async (body) => {
    const result = await Order.create(body)
    return result
}

const update = async (id, body) => {
    const result = await Order.findOneAndUpdate(
        { _id: id },
        { ...body },
        { new: true })
    return result
}

export default {
    getAll,
    getById,
    remove,
    create,
    update
}