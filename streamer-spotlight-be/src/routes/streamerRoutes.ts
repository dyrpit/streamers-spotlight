import express from 'express';

import {
  createStreamer,
  getStreamer,
  getStreamers,
  voteForStreamer,
} from '../controller';

import { API_ROUTES } from '../../../shared/constants';

const router = express.Router();

router.post(`${API_ROUTES.STREAMERS}`, createStreamer);

router.get(`${API_ROUTES.STREAMERS}`, getStreamers);

router.get(`${API_ROUTES.STREAMERS}/:streamerId`, getStreamer);

router.put(`${API_ROUTES.STREAMERS}/:streamerId/vote`, voteForStreamer);

export default router;
