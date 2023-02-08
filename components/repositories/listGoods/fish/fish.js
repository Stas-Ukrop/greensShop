import fish from '../../../model/listGoods/fish/fish.js'

const getAll = async () => {
    const result = await fish.find()
    return result
}

const getById = async (id) => {
    const results = await fish.findOne({ _id: id })
    return results
}

const remove = async (id) => {
    const result = await fish.findOneAndRemove({ _id: id })
    return result
}

const create = async (id, body) => {
    const result = await fish.create({
        owner: id,
        ...body
    })
    return result
}

const update = async (id, body) => {
    const result = await fish.findOneAndUpdate(
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