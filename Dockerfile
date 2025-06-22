# Use the official Node.js image as the base image
FROM node:20.9-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json first for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]