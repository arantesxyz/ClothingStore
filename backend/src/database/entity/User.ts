/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('user')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  uid: string

  @Column()
  email: string

  @Column()
  hash: string

  @Column({
    default: false
  })
  isAdmin: boolean
}
