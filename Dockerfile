FROM alpine:latest as builder


RUN apk add nodejs npm


COPY src/ ./src/
COPY package*.json .
COPY tsconfig.json .

RUN npm install --only=production && \
    cp -R node_modules prod_node_modules && \
    npm install 
RUN npm run build


FROM alpine:latest

WORKDIR /www

RUN apk add nodejs && \
    addgroup -S node && \
    adduser -S node -G node

USER node    

COPY --from=builder /prod_node_modules ./node_modules
COPY --from=builder --chown=node:node /dist ./dist

CMD node dist/index.js