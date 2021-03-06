import { IProductRepository, IProductService } from './structures'

export default class ProductService implements IProductService {
  constructor(private productRepository: IProductRepository) {}
}
