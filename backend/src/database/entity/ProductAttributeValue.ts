/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import AttributeValue from './AttributeValue'
import Product from './Product'

@Entity('product_attribute_value')
export default class ProductAttributeValue {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => Product, attributeValues => ProductAttributeValue)
  product: Product

  @ManyToOne(type => AttributeValue, products => AttributeValue)
  attributeValue: AttributeValue

  @Column()
  amount: number
}
