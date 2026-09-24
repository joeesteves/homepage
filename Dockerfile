# Use Node.js for building the Vite project
FROM node:24-alpine AS builder

# Set the working directory
WORKDIR /app

# Install the pnpm version used by the project
RUN npm install -g pnpm@10.34.5

# Copy package.json and pnpm-lock.yaml before installing dependencies
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Build the project
RUN pnpm build

# Use the official NGINX Alpine image for serving the built app
FROM nginx:stable-alpine

ARG COMMIT_SHA=unknown

# Copy built files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the exact source revision baked into this image.
RUN printf '{"status":"ok","commit":"%s"}\n' "$COMMIT_SHA" > /usr/share/nginx/html/health

# Copy custom NGINX config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the correct port
EXPOSE 3000

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
