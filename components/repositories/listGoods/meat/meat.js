import meat from '../../../model/listGoods/meat/meat.js'

const getAll = async () => {
    const result = await meat.find()
    return result
}

const getById = async (id) => {
    const results = await meat.findOne({ _id: id })
    return results
}

const remove = async (id) => {
    const result = await meat.findOneAndRemove({ _id: id })
    return result
}

const create = async (id, body) => {
    const result = await meat.create({
        owner: id,
        ...body
    })
    return result
}

const update = async (id, body) => {
    const result = await meat.findOneAndUpdate(
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