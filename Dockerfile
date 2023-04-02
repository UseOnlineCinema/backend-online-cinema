ARG NODE_VERSION="18-alpine"

FROM node:${NODE_VERSION}

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

CMD [ "yarn", "start:prod" ]