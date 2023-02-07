import mooshrooms from '../../../model/listGoods/mooshrooms/mooshrooms.js'

const getAll = async () => {
    const result = await mooshrooms.find()
    return result
}

const getById = async (id) => {
    const results = await mooshrooms.findOne({ _id: id })
    return results
}

const remove = async (id) => {
    const result = await mooshrooms.findOneAndRemove({ _id: id })
    return result
}

const create = async (id, body) => {
    const result = await mooshrooms.create({
        owner: id,
        ...body
    })
    return result
}

const update = async (id, body) => {
    const result = await mooshrooms.findOneAndUpdate(
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