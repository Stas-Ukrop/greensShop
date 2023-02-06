import nuts from '../../../model/listGoods/nuts/nuts.js'

const getAll = async () => {
    const result = await nuts.find()
    return result
}

const getById = async (id) => {
    const results = await nuts.findOne({ _id: id })
    return results
}

const remove = async (id) => {
    const result = await nuts.findOneAndRemove({ _id: id })
    return result
}

const create = async (id, body) => {
    const result = await nuts.create({
        owner: id,
        ...body
    })
    return result
}

const update = async (id, body) => {
    const result = await nuts.findOneAndUpdate(
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