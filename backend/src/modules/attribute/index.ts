import { Router } from 'express'

export const AttributeRoute = Router()
AttributeRoute.post('/', (req, res) => res.send('ok'))
