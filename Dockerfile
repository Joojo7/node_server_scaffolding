FROM node:14-alpine
EXPOSE 8080

ENV SERVICE_HOME /service
RUN mkdir -p $SERVICE_HOME
RUN apk add --no-cache bash
WORKDIR $SERVICE_HOME
COPY . .
RUN npm ci --production
CMD npm start
