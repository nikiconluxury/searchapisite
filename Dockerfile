# Use the official NGINX lightweight image
FROM nginx:alpine

# Copy everything from the current directory (.) 
# into the default NGINX public folder (/usr/share/nginx/html).
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx in the foreground (standard CMD for nginx images)
CMD ["nginx", "-g", "daemon off;"]
