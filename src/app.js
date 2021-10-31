import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import cors from 'cors'

import TasksRoutes from './routes/tasks.router';

const app = express()

//TODO: Settings
app.set('pkg', pkg)
app.set('port', process.env.PORT || 3000)

//TODO middlewares
const corsOptions = {}
app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//TODO: Routes
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to my application",
        name: app.get('pkg').name,
        version: app.get('pkg').version,
        description: app.get('pkg').description,
        Autor: app.get('pkg').author,
    })
})


app.use('/api/tasks', TasksRoutes)

export default app
