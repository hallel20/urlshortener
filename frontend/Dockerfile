# frontend/Dockerfile
# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the frontend code to the container
COPY . .

# Build the React app
RUN npm run build

# Serve the frontend using a simple static server
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
