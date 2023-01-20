import User from '../../model/users/users.js'

const getAll = async () => {
    const result = await User.find()
    return result
}

const getById = async (id) => {
    const results = await User.findOne({ _id: id })
    return results
}

const remove = async (id) => {
    const result = await User.findOneAndRemove({ _id: id })
    return result
}

const create = async (body) => {
    const result = await User.create(body)
    return result
}

const update = async (id, body) => {
    const result = await User.findOneAndUpdate(
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

// import User from '../model/user.js'

// const findById = async (id) => {
//     return await User.findById(id)
// }

// const findByEmail = async (email) => {
//     return await User.findOne({ email })
// }

// const create = async (body) => {
//     const user = new User(body)
//     return await user.save()
// }

// const updateToken = async (id, token) => {
//     return await User.updateOne({
//         _id: id
//     }, { token })
// }

// export default { findById, findByEmail, create, updateToken }