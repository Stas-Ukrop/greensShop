import greens from '../../../model/listGoods/greens/greens.js'

const getAll = async () => {
    const result = await greens.find()
    return result
}

const getById = async (id) => {
    const results = await greens.findOne({ _id: id })
    return results
}

const remove = async (id) => {
    const result = await greens.findOneAndRemove({ _id: id })
    return result
}

const create = async (id, body) => {
    const result = await greens.create({
        owner: id,
        ...body
    })
    return result
}

const update = async (id, body) => {
    const result = await greens.findOneAndUpdate(
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