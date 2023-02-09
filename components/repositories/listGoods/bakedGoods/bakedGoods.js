import BakedGood from '../../../model/listGoods/bakedGoods/bakedGoods.js'

const getAll = async (skip, limit) => {
    const result = await BakedGood.find({}, "", { skip, limit })
    return result
}

const getById = async (id) => {
    const results = await BakedGood.findOne({ _id: id })
    return results
}

const remove = async (id) => {
    const result = await BakedGood.findOneAndRemove({ _id: id })
    return result
}

const create = async (id, body) => {
    const result = await BakedGood.create({
        owner: id,
        ...body
    })
    return result
}

const update = async (id, body) => {
    const result = await BakedGood.findOneAndUpdate(
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