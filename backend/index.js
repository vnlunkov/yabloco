import config from 'dotenv/config'
import express from 'express'
import sequelize from './sequelize.js'
import * as mapping from './models/mapping.js';
import cors from 'cors'
import router from './routes/index.js'
import errorhandler from './middleware/errorhandler.js'

const port = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorhandler)
app.use(express.static('static'))

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, () => console.log('Сервер запущен на порту', port))
    } catch(e) {
        console.log(e)
    }
}

start()