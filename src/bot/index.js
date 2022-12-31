require('dotenv').config();
const { Indomitable } = require('indomitable');
const client = require('./bot');

const options = {
  clusterCount: 1,
  shardCount: 1,
  clientOptions: {
      intents: [1 << 0] 
  },
  autoRestart: true,
  client: client,
  token: process.env.BOT_TOKEN
}

const manager = new Indomitable(options)
  .on('error', console.error);

manager.spawn();

