/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import ProductAttributeValue from './ProductAttributeValue'
import ProductType from './ProductType'

@Entity('product')
export default class Product {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => ProductType, products => Product)
  productType: ProductType

  @Column()
  name: string

  @Column()
  description: string

  @OneToMany(type => ProductAttributeValue, product => Product)
  attributeValues: ProductAttributeValue[]
}
