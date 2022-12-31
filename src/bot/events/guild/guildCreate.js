const { Listener, Logger } = require('gcommands');

new class GuildCreate extends Listener {
    constructor() {
        super({
            name: 'guildCreate',
            event: 'guildCreate'
        });
    }

    run(guildCreate) {
        Logger.info(`Joined new guild ${guildCreate.name}, owner ${guildCreate.ownerId}!`);
    }
}