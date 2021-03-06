import { IProductTypeRepository, IProductTypeService } from './structures'

export default class ProductTypeService implements IProductTypeService {
  constructor(private productTypeRepository: IProductTypeRepository) {}
}
