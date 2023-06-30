import { VoteType } from './types';

export interface Platform {
  id: string;
  name: string;
}
export interface CreateStreamerDto {
  name: string;
  description: string;
  platforms: Platform[];
}

export interface VoteDto {
  voteType: VoteType;
}
