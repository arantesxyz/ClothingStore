import { Router } from 'express'

export const ProductRoute = Router()
ProductRoute.post('/', (req, res) => res.send('ok'))
