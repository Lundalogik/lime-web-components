FROM node:lts-stretch

# Create app directory
WORKDIR /lime

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json
# are copied where available (npm@5+)
COPY package*.json ./

RUN npm install -g npm@latest
RUN npm install

# Bundle app source
COPY . .

RUN npm run build
