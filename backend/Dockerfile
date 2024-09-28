# Stage 1: Dependencies
FROM node:20-alpine AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm install --cache-min Infinity

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/dist ./dist

RUN mkdir -p ./vacation-rental-property
COPY --from=builder /app/dist/ ./vacation-rental-property
RUN adduser --disabled-password vacation-rental-property-user
RUN chown -R vacation-rental-property-user:vacation-rental-property-user ./vacation-rental-property
USER vacation-rental-property-user

CMD ["node", "dist/main"]
