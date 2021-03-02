/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Attribute from './Attribute'
import ProductType from './ProductType'

@Entity('product_type_attribute')
export default class ProductTypeAttribute {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => ProductType, productAttributes => ProductTypeAttribute)
  productType: ProductType

  @ManyToOne(type => Attribute, productAttributes => ProductTypeAttribute)
  attribute: Attribute
}
