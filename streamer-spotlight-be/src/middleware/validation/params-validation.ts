import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

const streamerIdSchema = z.string().uuid();

export const validateParams = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { streamerId } = req.params;

  const result = streamerIdSchema.safeParse(streamerId);

  if (!result.success) {
    console.error('Invalid streamer ID', result.error.errors);
    return res.status(400).json({
      message: 'Invalid streamer ID',
      error: result.error.errors.map((e) => e.code),
    });
  }

  next();
};
