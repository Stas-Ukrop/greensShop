import jamAndPickles from '../../../model/listGoods/jamAndPickles/jamAndPickles.js'

const getAll = async () => {
    const result = await jamAndPickles.find()
    return result
}

const getById = async (id) => {
    const results = await jamAndPickles.findOne({ _id: id })
    return results
}

const remove = async (id) => {
    const result = await jamAndPickles.findOneAndRemove({ _id: id })
    return result
}

const create = async (id, body) => {
    const result = await jamAndPickles.create({
        owner: id,
        ...body
    })
    return result
}

const update = async (id, body) => {
    const result = await jamAndPickles.findOneAndUpdate(
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