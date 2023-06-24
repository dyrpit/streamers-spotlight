import { Response, Request } from 'express';
import express from 'express';
import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from streamer spotlight api!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
