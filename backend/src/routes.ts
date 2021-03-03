import { Router } from 'express'
import { UsersRoute } from './modules/user'
import { AuthRoute } from './modules/auth'

const mainRoute = Router()

mainRoute.use('/auth', AuthRoute)
mainRoute.use('/users', UsersRoute)

export default mainRoute
