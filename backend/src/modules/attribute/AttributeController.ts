import { Request, Response } from 'express'

import { IAttributeController, IAttributeService } from './structures'

export default class AttributeController implements IAttributeController {
  constructor(private attributeService: IAttributeService) {}

  async index(req: Request, res: Response): Promise<void> {}
}
