FROM Shanduy/ShanBot:latest

RUN git clone https://github.com/Axel-bytu/NenaBot /root/NenaBot
WORKDIR /root/NenaBot/
ENV EC = Americadelsur/Ecuador
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "index.js"]
