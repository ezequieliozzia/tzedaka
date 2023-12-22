# Use an official Node.js runtime as a parent image
FROM node:latest

# Environment variables #TODO insert here NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY
ENV NODE_ENV=development

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run your app using npm
CMD ["npm", "start"]
# CMD ["npm", "run", "dev"]
