# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy app files
COPY package*.json ./
RUN npm install
COPY . .

# Expose the app port
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
