FROM node:16

# Create Directory for the Container

RUN adduser --gecos '' --disabled-password --no-create-home user

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Only copy the package.json file to work directory
COPY package.json ./
# Install all Packages
RUN npm install


# Copy all other source code to work directory
ADD . /usr/src/app
COPY . ./

# TypeScript
RUN npm run build

USER user
# Start
CMD [ "node", "dist/index.js" ]
EXPOSE 3000
