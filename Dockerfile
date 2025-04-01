# Use official Node.js image as a base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Command to run the app
CMD ["node", "server.js"]
