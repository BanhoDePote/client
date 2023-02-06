FROM node:16 as react-build

# pasta para aonde vai o build
WORKDIR /app

COPY . .
RUN npm i
RUN npm run build

RUN mkdir -p /var/www/html
RUN mv dist/* /var/www/html

WORKDIR /

RUN rm -rf /app