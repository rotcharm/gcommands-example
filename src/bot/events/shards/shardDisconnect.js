const { Listener, Logger } = require('gcommands');

new class ShardDisconnect extends Listener {
    constructor() {
        super({
            name: 'shardDisconnect',
            event: 'shardDisconnect'
        });
    }

    run(shardDisconnect) {
        Logger.info(`Shard ${shardDisconnect} is disconnected!`);
    }
}