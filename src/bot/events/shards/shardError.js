const { Listener, Logger } = require('gcommands');

new class ShardError extends Listener {
    constructor() {
        super({
            name: 'shardError',
            event: 'shardError'
        });
    }

    run(shardError) {
        Logger.info(`Error with shard ${shardError}!`);
    }
}