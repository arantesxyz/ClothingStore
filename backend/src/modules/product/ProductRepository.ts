import BaseRepository from '../../utils/BaseRepository'
import Product from '../../database/entity/Product'
import { IProductRepository } from './structures'
import { Repository } from 'typeorm'

export default class ProductRepository
  extends BaseRepository<Product>
  implements IProductRepository {
  getRepo(): Repository<Product> {
    return super._getRepo(Product)
  }
}
