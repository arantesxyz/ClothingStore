import { IAttributeRepository, IAttributeService } from './structures'

export default class AttributeService implements IAttributeService {
  constructor(private attributeRepository: IAttributeRepository) {}
}
