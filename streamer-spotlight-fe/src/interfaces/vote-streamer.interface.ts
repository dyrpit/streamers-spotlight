import { VoteDto } from '../../../shared/interfaces';

export interface VoteDataWithId extends VoteDto {
  id: string;
}
