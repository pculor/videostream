# Use node 16
FROM node:16 AS droneapp
# Change working directory
WORKDIR /app

# install dependencies
# copy package.json and install dependencies
COPY package.json package.json

RUN npm install && mv node_modules /node_modules

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV


# Copy source code
COPY . .

RUN ls


# Expose API port to the outside for container
EXPOSE 4000

LABEL maintainer="Pascal Ulor <pascalulor@yahoo.com>"

# Launch application
RUN ["chmod", "+x", "/app/dev.docker-entrypoint.sh"]

ENTRYPOINT [ "./dev.docker-entrypoint.sh" ]
