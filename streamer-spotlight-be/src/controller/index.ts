import { Request, Response } from 'express';

import { prismaClient } from '../client';
import { TypedRequest } from '../interfaces/interfaces';

import { CreateStreamerDto, VoteDto } from '../../../shared/interfaces';
import { VOTE_TYPES } from '../../../shared/constants';

export const createStreamer = async (
  req: TypedRequest<CreateStreamerDto>,
  res: Response,
) => {
  const { name, description, platforms } = req.body;

  try {
    const streamer = await prismaClient.streamer.create({
      data: {
        name,
        description,
        platforms: {
          connectOrCreate: platforms.map((platform: string) => ({
            where: { id: platform },
            create: { name: platform },
          })),
        },
      },
    });

    res.json(streamer);
  } catch (e) {
    console.error('Error creating streamer:', e);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getStreamers = async (req: Request, res: Response) => {
  try {
    const streamers = await prismaClient.streamer.findMany({
      include: { platforms: true },
    });
    res.json(streamers);
  } catch (error) {
    console.error('Error retrieving streamers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getStreamer = async (req: Request, res: Response) => {
  try {
    const { streamerId } = req.params;
    const streamer = await prismaClient.streamer.findUnique({
      where: {
        id: streamerId,
      },
      include: { platforms: true },
    });

    if (!streamer) {
      res.status(404).json({ error: 'Streamer not found' });
    } else {
      res.json(streamer);
    }
  } catch (error) {
    console.error('Error retrieving streamer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const voteForStreamer = async (
  req: TypedRequest<VoteDto>,
  res: Response,
) => {
  try {
    const { streamerId } = req.params;
    const { voteType } = req.body;

    if (voteType !== VOTE_TYPES.UPVOTE && voteType !== VOTE_TYPES.DOWNVOTE) {
      res.status(400).json({ error: 'Invalid vote type' });
      return;
    }

    const streamer = await prismaClient.streamer.update({
      where: {
        id: streamerId,
      },
      data: {
        upvotes: {
          increment: voteType === VOTE_TYPES.UPVOTE ? 1 : 0,
        },
        downvotes: {
          increment: voteType === VOTE_TYPES.DOWNVOTE ? 1 : 0,
        },
      },
    });

    res.json(streamer);
  } catch (error) {
    console.error('Error updating streamer votes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
