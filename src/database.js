import mongoose from 'mongoose'
import config from './config'

// CONEXION A BASE DE DATOS
(() => {
    try {
        const db = mongoose.connect(`mongodb+srv://${config.mongodbUSER}:${config.mongodbPASS}@cluster0.b8v7n.mongodb.net/${config.mongodbNAME}?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
        console.log('Database is connected to: ', config.mongodbNAME)
    } catch (error) {
        console.error(error)
    }
})()