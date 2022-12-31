const { Listener, Logger } = require('gcommands');

new class ShardReconnecting extends Listener {
    constructor() {
        super({
            name: 'shardReconnecting',
            event: 'shardReconnecting'
        });
    }

    run(shardReconnecting) {
        Logger.info(`Shard ${shardReconnecting} is reconnecting!`);
    }
}