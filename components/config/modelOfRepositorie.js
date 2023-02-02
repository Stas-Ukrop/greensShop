const getAll = async (model) => {
    const result = await model.find()
    return result
}

const getById = async (model, id) => {
    const results = await model.findOne({ _id: id })
    return results
}

const remove = async (model, id) => {
    const result = await model.findOneAndRemove({ _id: id })
    return result
}

const create = async (model, id, body) => {
    const result = await model.create({
        owner: id,
        ...body
    })
    return result
}

const update = async (model, id, body) => {
    const result = await model.findOneAndUpdate(
        { _id: id },
        { ...body },
        { new: true })
    return result
}

export {
    getAll,
    getById,
    remove,
    create,
    update
}