import BaseRepository from '../../utils/BaseRepository'
import Attribute from '../../database/entity/Attribute'
import { IAttributeRepository } from './structures'
import { Repository } from 'typeorm'

export default class AttributeRepository
  extends BaseRepository<Attribute>
  implements IAttributeRepository {
  getRepo(): Repository<Attribute> {
    return super._getRepo(Attribute)
  }
}
