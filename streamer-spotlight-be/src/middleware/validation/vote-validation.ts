import { NextFunction, Response } from 'express';
import { z } from 'zod';

import { TypedRequest } from '../../interfaces/interfaces';
import { VoteDto } from '../../../../shared/interfaces';
import { VOTE_TYPES } from '../../../../shared/constants';

const voteSchema = z.object({
  voteType: z.enum([VOTE_TYPES.UPVOTE, VOTE_TYPES.DOWNVOTE]),
});

export const validateVoteBody = (
  req: TypedRequest<VoteDto>,
  res: Response,
  next: NextFunction,
) => {
  const result = voteSchema.safeParse(req.body);

  if (!result.success) {
    console.error('Invalid vote request body:', result.error.errors);
    return res.status(400).json({
      message: 'Invalid vote request body',
      error: result.error.errors.map((e) => e.code),
    });
  }

  next();
};
