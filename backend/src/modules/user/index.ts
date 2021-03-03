import UserRepositoryClass from './UserRepository'
import UserServiceClass from './UserService'
import UserControllerClass from './UserController'
import { Router } from 'express'

export const UserRepository = new UserRepositoryClass()
export const UserService = new UserServiceClass(UserRepository)
export const UserController = new UserControllerClass(UserService)

export const UsersRoute = Router()
UsersRoute.post('/', (req, res) => UserController.create(req, res))
