ARG NODE_VERSION=20.15.0

# run in alpine
FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV=development
WORKDIR /app

COPY . .


# install pnpm
RUN npm install -g pnpm

# install dependencies
RUN pnpm install --frozen-lockfile

# Disable Next telemetry
RUN pnpm exec next telemetry disable

ENV NODE_ENV=production
# Build the frontend
RUN pnpm build


# Expose port 3000
EXPOSE 3000

# Run nextjs
CMD [ "pnpm", "start" ]

