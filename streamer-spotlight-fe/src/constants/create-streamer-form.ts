import {
  CreateStreamerFormData,
  StreamingPlatform,
} from '../interfaces/create-streamer-interface';

export const streamingPlatformsOptions: StreamingPlatform[] = [
  { id: 'bd30fb72-8e24-4577-8e78-ad7190768fbc', name: 'Twitch' },
  { id: 'e44717d8-0a4e-463e-abba-0066bfdac17e', name: 'YouTube' },
  { id: '093b5d2d-48f1-4ff3-b926-5c444699c696', name: 'TikTok' },
  { id: '046a4651-f1ee-4cd8-879c-841abe91d9f1', name: 'Kick' },
  { id: 'fe03ceb2-654c-4c6f-97ad-4bee0c82d4b6', name: 'Rumble' },
];

export const initialCreateStreamerFormData: CreateStreamerFormData = {
  description: '',
  name: '',
  platforms: [],
};
