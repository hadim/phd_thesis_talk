FROM node:5.1

RUN npm install -g npm
RUN npm install -g gulp

ADD package.json /slides/package.json

WORKDIR /slides
RUN npm install

CMD gulp build && gulp
