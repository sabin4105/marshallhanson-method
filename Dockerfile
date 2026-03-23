FROM node:20-alpine

WORKDIR /app

# Copy package files to install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your code
COPY . .

# Next.js default port
EXPOSE 3000

# Run the development server
CMD ["npm", "run", "dev"]