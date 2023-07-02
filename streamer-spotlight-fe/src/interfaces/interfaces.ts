// TODO replace this interace with the one from prisma
export interface Streamer {
  id: string;
  name: string;
  description: string;
  upvotes: number;
  downvotes: number;
  platforms: {
    id: string;
    name: string;
  }[];
}
