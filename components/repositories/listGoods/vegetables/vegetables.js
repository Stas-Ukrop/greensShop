import Vegetables from '../../../model/listGoods/vegetable/vegetables.js'

const getAll = async () => {
    const result = await Vegetables.find()
    return result
}

const getById = async (id) => {
    const results = await Vegetables.findOne({ _id: id })
    return results
}

const remove = async (id) => {
    const result = await Vegetables.findOneAndRemove({ _id: id })
    return result
}

const create = async (id, body) => {
    const result = await Vegetables.create({
        owner: id,
        ...body
    })
    return result
}

const update = async (id, body) => {
    const result = await Vegetables.findOneAndUpdate(
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