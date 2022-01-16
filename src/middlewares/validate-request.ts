import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { RequestValidationError } from '../errors/request-validation-error';

export const validateRequest = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  return next();
};