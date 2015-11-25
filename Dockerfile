FROM node:5.1

RUN npm install -g npm
RUN npm install -g gulp

ADD . /slides

WORKDIR /slides
RUN npm install
RUN gulp build

CMD gulp
