import { config } from 'dotenv'
config()

export default {
    mongodbUSER: process.env.USUARIO,
    mongodbPASS: process.env.PASSWORD,
    mongodbNAME: process.env.DBNAME,

    // 'mongodb+srv://nedp_products:tLPIkpJgdFfB3fZs@cluster0.b8v7n.mongodb.net/tasks-nedp?retryWrites=true&w=majority',
    // PORT: process.env.PORT || 3000,
    // SECRET: 'nedpProductsApp'

}