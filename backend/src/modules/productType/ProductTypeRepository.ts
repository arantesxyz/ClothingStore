import BaseRepository from '../../utils/BaseRepository'
import ProductType from '../../database/entity/ProductType'
import { IProductTypeRepository } from './structures'
import { Repository } from 'typeorm'

export default class ProductTypeRepository
  extends BaseRepository<ProductType>
  implements IProductTypeRepository {
  getRepo(): Repository<ProductType> {
    return super._getRepo(ProductType)
  }
}
