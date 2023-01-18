import Users from "../../repositories/users/users.js"

const getAll = async (req, res, next) => {
    try {
        const users = await Users.getAll()
        res.json({ status: 'success', code: 200, data: { users } })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const user = await Users.getById(req.params.id)
        if (user) {
            return res.json({ status: 'success', code: 200, data: { user } })
        }
        return res.json({ status: 'error', code: 404, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const user = await Users.create(req.body)
        res.status(201).json({ status: 'success', code: 201, data: { user } })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const user = await Users.remove(req.params.id)
        if (user) {
            res.status(201).json({ status: 'success', code: 204, data: { user } })
        }
        return res.json({ status: 'error', code: 404, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const user = await Users.update(req.params.id, req.body)
        if (user) {
            res.status(201).json({ status: 'success', code: 204, data: { user } })
        }
        return res.json({ status: 'error', code: 404, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

export default {
    getAll,
    getById,
    remove,
    create,
    update
}