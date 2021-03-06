import { Router } from 'express'

export const ProductTypeRoute = Router()
ProductTypeRoute.post('/', (req, res) => res.send('ok'))
