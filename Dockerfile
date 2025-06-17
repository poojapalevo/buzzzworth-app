# 1. Use Node image to build the Next.js app
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# 2. Use a lightweight image to serve the app
FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm",'start']
# CMD ["npm", "run", "dev"]
