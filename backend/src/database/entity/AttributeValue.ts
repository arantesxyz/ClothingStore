/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import Attribute from './Attribute'
import Product from './Product'

@Entity('attribute_value')
export default class AttributeValue {
  @PrimaryGeneratedColumn()
  id: string

  @ManyToOne(type => Attribute, values => AttributeValue)
  attribute: Attribute

  @Column()
  name: string

  @OneToMany(type => Product, attributeValue => AttributeValue)
  products: Product[]
}
