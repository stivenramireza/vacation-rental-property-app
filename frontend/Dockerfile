# Stage 1: Dependencies
FROM node:20-alpine AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install --cache-min Infinity

# Stage 2: Runner
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm install

CMD ["npm", "run", "start"]
