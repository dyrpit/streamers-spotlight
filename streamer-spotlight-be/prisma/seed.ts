import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createStreamerWithPlatforms() {
  const foundStreamer = await prisma.streamer.findFirst({
    where: {
      name: 'Test streamer',
    },
  });

  if (!foundStreamer) {
    const streamer = await prisma.streamer.create({
      data: {
        name: 'Test streamer',
        description: "I'm a test streamer",
        platforms: {
          create: [
            { name: 'Twitch' },
            { name: 'YouTube' },
            { name: 'TikTok' },
            { name: 'Kick' },
            { name: 'Rumble' },
          ],
        },
      },
    });

    return streamer;
  }
}

async function main() {
  const streamer = await createStreamerWithPlatforms();

  console.log('Streamer created: ', streamer);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
