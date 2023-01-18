<<<<<<< HEAD
import Order from '../../model/orders/orders.js'

const getAll = async () => {
    const result = await Order.find()
    return result
}

const getById = async (id) => {
    const results = await Order.findOne({ _id: id })
    return results
}

const remove = async (id) => {
    const result = await Order.findOneAndRemove({ _id: id })
    return result
}

const create = async (body) => {
    const result = await Order.create(body)
    return result
}

const update = async (id, body) => {
    const result = await Order.findOneAndUpdate(
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
=======
import myDB from '../../db/db.js'
import { ObjectId } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const NAME_DB_ORDERS = process.env.NAME_DB_ORDERS

const getCollection = async (db, name) => {
    console.log('repo')
    const client = await db
    const collection = await client.getCollection(name).find({})
    console.log(collection)
    return collection
}
const getAll = async () => {
    const collection = await getCollection(myDB, NAME_DB_ORDERS)
    const result = await collection.find({}).toArray()
    return result
}
const getById = async (id) => {
    const collection = await getCollection(myDB, NAME_DB_ORDERS)
    const objId = new ObjectId(id)
    console.log(objId)
    const [result] = await collection.find({ _id: objId }).toArray()
    return result
}
const create = async (body) => {
    const collection = await getCollection(myDB, NAME_DB_ORDERS)
    const record = {
        ...body
    }
    // const result = await collection.insertOne(record)
    return await collection.insertOne(record)
}
const remove = async (id) => {
    const collection = await getCollection(myDB, NAME_DB_ORDERS)
    const objId = new ObjectId(id)
    const result = collection.findOneAndDelete({ _id: objId })
    return result
}
const update = async (id, body) => {
    const collection = await getCollection(myDB, NAME_DB_ORDERS)
    const objId = new ObjectId(id)
    const result = await collection.findOneAndUpdate({ _id: objId }, { $set: body }, { returnOriginal: false })
    return result
}

export default {
    getAll,
    getById,
    create,
    remove,
    update
>>>>>>> 2bc0c0cbf6100a5e29c7da5ace35603155518035
}