import { useQuery } from '@tanstack/react-query';

import api from '../../constants/axios';

import { GET_STREAMERS_KEY } from '../../constants/query-keys';
import { API_ROUTES } from '../../../../shared/constants';
import { Streamer } from '../../interfaces/interfaces';

const getStreamers = async () => {
  const { data } = await api.get<Streamer[]>(API_ROUTES.STREAMERS);
  return data;
};

interface QueryOptions {
  refetchInterval?: number;
}

export const useGetStreamers = ({ refetchInterval }: QueryOptions = {}) => {
  return useQuery({
    queryKey: [GET_STREAMERS_KEY],
    queryFn: getStreamers,
    refetchInterval,
  });
};
