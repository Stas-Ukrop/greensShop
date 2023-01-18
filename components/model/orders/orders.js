import myDB from '../../db/db.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'

const NAME_DB_ORDERS = process.env.NAME_DB_ORDERS

const getCollection = async (db, name) => {
    const client = await db
    console.log(client)
    const collection = await client.db().collection(name)
    return collection
}
const getAll = async () => {
    const collection = await getCollection(myDB, NAME_DB_ORDERS)
    const result = await collection.find({}).toArray()
    return result
}
const getById = async (id) => {
    const collection = await getCollection(myDB, NAME_DB_ORDERS)
    const objId = new mongodb.ObjectId(id)
    const result = await collection.find({ _id: objId }).toArray()
    return result
}
const create = async (body) => {
    const collection = await getCollection(myDB, NAME_DB_ORDERS)
    const record = {
        ...body
    }
    const result = collection.insertOne(record)
    return result
}

export default {
    getAll,
    getById,
    create
}