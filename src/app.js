import express from 'express'
import rentasRoutes from './routes/rentas.routes.js'
import indexRoutes from './routes/index.routes.js'

import {PORT} from './config.js'

const app = express( )

app.use(express.json())

app.use(indexRoutes)
app.use('/api', rentasRoutes)

app.use((req, res, next) => {
    return res.status(404).json({
        message: 'No funciona'
    })
})


export default app;