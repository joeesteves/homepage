# Use Node.js 22.5 image
FROM node:22.5-alpine

# Set the working directory
WORKDIR /app

# Copy the built dist folder from the Vite project
COPY dist /app/dist

# Install `serve` globally using pnpm
RUN npm install -g serve

# Expose the port that `serve` uses by default
EXPOSE 3000

# Start serving the dist folder
CMD ["serve", "-s", "dist", "-l", "3000"]

