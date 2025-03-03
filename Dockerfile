# Use Node.js for building the Vite project
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml before installing dependencies
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Build the project
RUN pnpm build

# Use the official NGINX Alpine image for serving the built app
FROM nginx:1.25-alpine

# Copy built files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom NGINX config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the correct port
EXPOSE 3000

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
