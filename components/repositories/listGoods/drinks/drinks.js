import drinks from '../../../model/listGoods/drinks/drinks.js'

const getAll = async () => {
    const result = await drinks.find()
    return result
}

const getById = async (id) => {
    const results = await drinks.findOne({ _id: id })
    return results
}

const remove = async (id) => {
    const result = await drinks.findOneAndRemove({ _id: id })
    return result
}

const create = async (id, body) => {
    const result = await drinks.create({
        owner: id,
        ...body
    })
    return result
}

const update = async (id, body) => {
    const result = await drinks.findOneAndUpdate(
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