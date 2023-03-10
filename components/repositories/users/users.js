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
    const user = new User(body)
    return await user.save()
}

const update = async (id, body) => {
    const result = await User.findOneAndUpdate(
        { _id: id },
        { ...body },
        { new: true })
    return result
}

const findByEmail = async (email) => {
    return await User.findOne({ email })
}

const updateToken = async (id, token) => {
    return await User.updateOne({
        _id: id
    }, { token })
}
const updateAvatar = async (id, avatar) => {
    return await User.updateOne({ _id: id }, { avatar })
}
export default {
    getAll,
    getById,
    remove,
    update,
    updateToken,
    findByEmail,
    create,
    updateAvatar
}