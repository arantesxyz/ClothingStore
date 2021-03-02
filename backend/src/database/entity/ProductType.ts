/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import Product from './Product'
import ProductTypeAttribute from './ProductTypeAttribute'

@Entity('product_type')
export default class ProductType {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(type => Product, productType => ProductType)
  products: Product[]

  @OneToMany(type => ProductTypeAttribute, productType => ProductType)
  productAttributes: ProductTypeAttribute[]
}
