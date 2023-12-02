FROM node:21.3.0-alpine
WORKDIR /app
RUN apk update && apk upgrade && \
	apk add --no-cache bash git
COPY package.json .
RUN yarn
COPY . .
ENTRYPOINT yarn start