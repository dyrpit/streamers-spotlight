import express from 'express';

import {
  createStreamer,
  getStreamer,
  getStreamers,
  voteForStreamer,
} from '../controller/steramers-controller';

import { API_ROUTES } from '../../../shared/constants';
import { validateVoteBody } from '../middleware/validation/vote-validation';
import { validateParams } from '../middleware/validation/params-validation';
import { validateStreamerBody } from '../middleware/validation/streamer-validation';

const router = express.Router();

router.post(`${API_ROUTES.STREAMERS}`, validateStreamerBody, createStreamer);

router.get(`${API_ROUTES.STREAMERS}`, getStreamers);

router.get(`${API_ROUTES.STREAMERS}/:streamerId`, validateParams, getStreamer);

router.put(
  `${API_ROUTES.STREAMERS}/:streamerId/vote`,
  validateParams,
  validateVoteBody,
  voteForStreamer,
);

export default router;
