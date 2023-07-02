import { useQuery } from '@tanstack/react-query';

import api from '../../constants/axios';

import { GET_STREAMER_KEY } from '../../constants/query-keys';
import { API_ROUTES } from '../../../../shared/constants';
import { Streamer } from '../../interfaces/interfaces';

const getStreamer = async (id: string) => {
  const { data } = await api.get<Streamer>(`${API_ROUTES.STREAMERS}/${id}`);
  return data;
};

export const useGetStreamer = (id: string) => {
  return useQuery({
    queryKey: [GET_STREAMER_KEY, id],
    queryFn: () => getStreamer(id),
  });
};
