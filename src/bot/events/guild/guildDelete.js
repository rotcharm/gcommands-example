const { Listener, Logger } = require('gcommands');

new class GuildDelete extends Listener {
    constructor() {
        super({
            name: 'guildDelete',
            event: 'guildDelete'
        });
    }

    run(guildDelete) {
        Logger.info(`Left guild ${guildDelete.name}, ownerId ${guildDelete.ownerId}!`);
    }
}