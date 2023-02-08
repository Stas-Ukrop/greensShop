import milks from '../../../model/listGoods/milks/milks.js'

const getAll = async () => {
    const result = await milks.find()
    return result
}

const getById = async (id) => {
    const results = await milks.findOne({ _id: id })
    return results
}

const remove = async (id) => {
    const result = await milks.findOneAndRemove({ _id: id })
    return result
}

const create = async (id, body) => {
    const result = await milks.create({
        owner: id,
        ...body
    })
    return result
}

const update = async (id, body) => {
    const result = await milks.findOneAndUpdate(
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