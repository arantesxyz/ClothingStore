import { IUser, IUserRepository, NewUser } from './structures'

export default (): IUserRepository => {
  return {
    async create(user: NewUser): Promise<IUser> {
      return { email: '', isAdmin: false, uid: '' }
    },

    async emailExists(email: string): Promise<boolean> {
      return false
    },

    async findByEmail(email: string): Promise<IUser> {
      return { email: '', isAdmin: false, uid: '' }
    }
  }
}
