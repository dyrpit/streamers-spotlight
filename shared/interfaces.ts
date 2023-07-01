import { VoteType } from './types';


export interface CreateStreamerDto {
  name: string;
  description: string;
  platforms: string[];
}

export interface VoteDto {
  voteType: VoteType;
}
