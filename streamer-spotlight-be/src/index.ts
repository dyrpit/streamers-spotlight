import { Response, Request } from 'express';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import streamersRoute from './routes/streamer-routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(streamersRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from streamer spotlight api!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
