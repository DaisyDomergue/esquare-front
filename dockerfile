FROM node:14-alpine

RUN mkdir -p /app

# get the app
WORKDIR /app
COPY package*.json /app/

# install packages
RUN npm install
COPY . /app/

# start app
EXPOSE 4200

CMD ["npm", "start"]
