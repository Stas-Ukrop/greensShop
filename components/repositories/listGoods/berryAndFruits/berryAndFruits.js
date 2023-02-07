import berryAndFruits from '../../../model/listGoods/berryAndFruits/berryAndFruits.js'

const getAll = async () => {
    const result = await berryAndFruits.find()
    return result
}

const getById = async (id) => {
    const results = await berryAndFruits.findOne({ _id: id })
    return results
}

const remove = async (id) => {
    const result = await berryAndFruits.findOneAndRemove({ _id: id })
    return result
}

const create = async (id, body) => {
    const result = await berryAndFruits.create({
        owner: id,
        ...body
    })
    return result
}

const update = async (id, body) => {
    const result = await berryAndFruits.findOneAndUpdate(
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