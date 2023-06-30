import { NextFunction, Response } from 'express';
import { z } from 'zod';

import { TypedRequest } from '../../interfaces/interfaces';
import { CreateStreamerDto } from '../../../../shared/interfaces';

const platformSchema = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty(),
});


const createStreamerSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  platforms: z.array(platformSchema),
});

export const validateStreamerBody = (
  req: TypedRequest<CreateStreamerDto>,
  res: Response,
  next: NextFunction,
) => {
  const result = createStreamerSchema.safeParse(req.body);

  if (!result.success) {
    console.error('Invalid create streamer request body:', result.error.errors);
    return res.status(400).json({
      message: 'Invalid create streamer request body',
      error: result.error.errors.map((e) => e.code),
    });
  }

  next();
};
