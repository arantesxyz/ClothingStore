# build
FROM node:12 as build

WORKDIR /build
COPY . .

RUN yarn
RUN yarn tsc

# production
FROM node:12-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production

COPY --from=build /build/ormconfig.js .
COPY --from=build /build/dist .

CMD ["index.js"]
