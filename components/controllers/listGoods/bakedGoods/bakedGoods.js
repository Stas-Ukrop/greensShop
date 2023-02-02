import BakedGoods from "../../../repositories/listGoods/bakedGoods/bakedGoods.js"

const getAll = async (req, res, next) => {
    try {
        console.log(12)
        const bakedGoods = await BakedGoods.getAll()
        res.json({ status: 'success', code: 200, data: { bakedGoods } })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const bakedGoods = await BakedGoods.getById(req.params.id)
        if (bakedGoods) {
            return res.json({ status: 'success', code: 200, data: { bakedGoods } })
        }
        return res.json({ status: 'error', code: 404, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        // const t = req.body
        // console.log(req.user._id)
        const bakedGoods = await BakedGoods.create(req.user._id, req.body)
        return res.status(201).json({ status: 'success', code: 201, data: { bakedGoods } })
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const bakedGoods = await BakedGoods.remove(req.params.id)
        if (bakedGoods) {
            res.status(201).json({ status: 'success', code: 204, data: { bakedGoods } })
        }
        return res.json({ status: 'error', code: 404, message: 'Not found' })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const bakedGoods = await BakedGoods.update(req.params.id, req.body)
        if (bakedGoods) {
            res.status(201).json({ status: 'success', code: 204, data: { bakedGoods } })
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