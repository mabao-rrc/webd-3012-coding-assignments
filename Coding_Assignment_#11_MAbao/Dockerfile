# Use the official Node.js image
# FROM node:18-alpine
FROM node:18

# Set the working directory
WORKDIR /Abao_Marissa_site

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Set the environment variable to development
ENV NODE_ENV=development

# Expose the correct port
EXPOSE 7775

# Start the app on port 7775
CMD ["npm", "start"]
