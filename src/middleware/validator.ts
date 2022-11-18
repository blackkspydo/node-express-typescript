import yup from 'yup';
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'yup';
export const validate = (schema: yup.AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params
    });
    return next();
  } catch (err: unknown) {
    if (err instanceof ValidationError) return res.status(500).json({ type: err.name, message: err.message });

    return res.status(500).json({ type: 'unknown', message: 'unknown error' });
  }
};
