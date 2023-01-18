<<<<<<< HEAD
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const URI = process.env.URI_DB

const myDB = new mongoose.connect(
    URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 5
    }
)

mongoose.connection.on('connected', () => {
    console.log(`Connection open with ${URI}`)
})
mongoose.connection.on('error', (e) => {
    console.log(`Error mongoose connection ${e.message}`)
})
mongoose.connection.on('disconnected', (e) => {
    console.log(`Mongoose disconnected`)
})
process.on('SIGINT', async () => {
    mongoose.connection.close('error', () => {
        console.log('Connection to DB terminated')
        process.exit(1)
    })
})

=======
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const URI = process.env.URI_DB

const myDB = mongoose.connect(
    URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 5
    }
)
mongoose.connection.on('connected', () => {
    console.log(`Connection open ${URI}`)
})
mongoose.connection.on('error', (e) => {
    console.log(`Error mongoose connection ${e.message}`)
})
mongoose.connection.on('disconnected', (e) => {
    console.log(`Mongoose disconnected`)
})
process.on('SIGINT', async () => {
    mongoose.connection.close(() => {
        console.log('время спатоньки')
        process.exit(1)
    })
})

>>>>>>> 2bc0c0cbf6100a5e29c7da5ace35603155518035
export default myDB