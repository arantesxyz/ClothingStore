import { Request, Response } from 'express'

import { IProductController, IProductService } from './structures'

export default class ProductController implements IProductController {
  constructor(private productService: IProductService) {}

  async index(req: Request, res: Response): Promise<void> {}
}
