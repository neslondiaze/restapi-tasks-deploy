import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import TasksRoutes from './routes/tasks.router';

const app = express()

//TODO: Settings
app.set('port', process.env.PORT || 3000)

//TODO middlewares
const corsOptions = {}
app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//TODO: Routes
app.get('/', (req, res) => {
    res.json({ message: "Welcome to my application" })
})


app.use('/api/tasks', TasksRoutes)

export default app
