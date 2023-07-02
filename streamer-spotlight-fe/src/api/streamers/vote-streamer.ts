import { useMutation } from '@tanstack/react-query';

import api from '../../constants/axios';
import { queryClient } from '../../constants/query-client';

import {
  GET_STREAMERS_KEY,
  VOTE_STREAMERS_KEY,
} from '../../constants/query-keys';
import { API_ROUTES } from '../../../../shared/constants';
import { VoteDto } from '../../../../shared/interfaces';
import { VoteDataWithId } from '../../interfaces/vote-streamer.interface';
import { Streamer } from '../../interfaces/interfaces';

const voteStreamer = async (streamerId: string, payload: VoteDto) => {
  const { data } = await api.put<Streamer>(
    `${API_ROUTES.STREAMERS}/${streamerId}/vote`,
    payload,
  );
  return data;
};

export const useVoteStreamer = () => {
  let id = '';
  return useMutation({
    mutationKey: [VOTE_STREAMERS_KEY, id],
    mutationFn: (data: VoteDataWithId) => {
      const { id: streamerId, ...payload } = data;
      id = streamerId;
      return voteStreamer(streamerId, payload);
    },
    onSuccess: () => queryClient.invalidateQueries([GET_STREAMERS_KEY]),
  });
};
