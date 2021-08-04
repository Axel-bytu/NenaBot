FROM shanduy/shanBot:latest

RUN git clone https://github.com/Axel-bytu/NenaBot /root/NenaBot
WORKDIR /root/nenabot/
ENV EC = americadelsur/ecuador
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "index.js"]
