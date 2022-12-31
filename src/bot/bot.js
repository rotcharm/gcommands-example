require('dotenv').config();
const { GClient, Logger } = require('gcommands');
const { GatewayIntentBits, Collection } = require('discord.js');
const path = require('path');

class client extends GClient{
  constructor(options) {
    super({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildVoiceStates,
            GatewayIntentBits.GuildMembers,
        ],
        dirs: [
            path.join(__dirname, 'commands'),
            path.join(__dirname, 'events')
        ],
        shards: options.shards,
        shardCount: options.shardCount
    })
  }

commands = new Collection();

  login(){
    Logger.info(`Attempting to login on shards [${this.options.shards.join(', ')}].`);
    super.login(process.env.BOT_TOKEN);
  }
}

module.exports = client;