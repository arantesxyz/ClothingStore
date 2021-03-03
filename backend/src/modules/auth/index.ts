import AuthServiceClass from './AuthService'
import AuthControllerClass from './AuthController'
import { UserRepository } from '../user'
import { Router } from 'express'

export const AuthService = new AuthServiceClass(UserRepository)
export const AuthController = new AuthControllerClass(AuthService)

export const AuthRoute = Router()
AuthRoute.post('/login', (req, res) => AuthController.login(req, res))
