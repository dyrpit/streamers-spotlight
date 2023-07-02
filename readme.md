# Streamer spotlight app

## Run project

1. git clone
2. Run backend:
   - cd streamers/spotlight-be
   - npm i
   - add .env file to root BE project directory with PORT and DATABASE_URL variables
     - PORT=5500
     - DATABASE_URL="file:./dev.db"
   - npx prisma migrate dev --name init
   - npm run start:watch
3. Run frontend:
   - cd streamers/spotlight-fe
   - npm i
   - add .env file to root FE project directory with VITE_BE_URL variable
     - VITE_BE_URL=http://localhost:5500
   - npm run dev

App is ready to go! BE is listening on port 5000 and FE on port 5137. DB is seeded with initial data.
