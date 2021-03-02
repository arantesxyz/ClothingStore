/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import AttributeValue from './AttributeValue'
import ProductTypeAttribute from './ProductTypeAttribute'

@Entity('attribute')
export default class Attribute {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(type => AttributeValue, attribute => Attribute)
  values: AttributeValue[]

  @OneToMany(type => ProductTypeAttribute, attribute => Attribute)
  productAttributes: ProductTypeAttribute[]
}
