# Use the official NGINX Alpine image
FROM nginx:1.25-alpine

# Copy built files from Vite project
COPY dist /usr/share/nginx/html

# Copy custom NGINX config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the correct port
EXPOSE 3000

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]

