import { useMutation } from '@tanstack/react-query';

import api from '../../constants/axios';

import { CREATE_STREAMER_KEY } from '../../constants/query-keys';
import { API_ROUTES } from '../../../../shared/constants';

import { CreateStreamerFormData } from '../../interfaces/create-streamer-interface';

const createStreamer = async (data: CreateStreamerFormData) =>
  api.post(API_ROUTES.STREAMERS, data);

export const useCreateStreamer = () => {
  return useMutation({
    mutationKey: [CREATE_STREAMER_KEY],
    mutationFn: (data: CreateStreamerFormData) => createStreamer(data),
  });
};
