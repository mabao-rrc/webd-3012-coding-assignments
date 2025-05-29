# Use the official Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /Abao_Marissa_site

# Copy dependency files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all other files
COPY . .

# Build the Next.js app
RUN npm run build

# Set the environment to development
ENV NODE_ENV=development

# Expose the app on port 7775
EXPOSE 7775

# Start the app on port 7775
CMD ["npm", "start"]
