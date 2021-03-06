import { Request, Response } from 'express'

import { IProductTypeController, IProductTypeService } from './structures'

export default class ProductTypeController implements IProductTypeController {
  constructor(private productTypeService: IProductTypeService) {}

  async index(req: Request, res: Response): Promise<void> {}
}
