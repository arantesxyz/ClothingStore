import express from 'express'
import 'express-async-errors'

import routes from './routes'
import HttpErrorHandler from './middlewares/HttpErrorHandler'

const app = express()

app.use(express.json())
app.use(routes)

app.use(HttpErrorHandler)

export default app
