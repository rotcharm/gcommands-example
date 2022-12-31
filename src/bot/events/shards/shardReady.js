const { Listener, Logger } = require('gcommands');

new class ShardReady extends Listener {
    constructor() {
        super({
            name: 'shardReady',
            event: 'shardReady'
        });
    }

    run(shardReady) {
        Logger.info(`Shard ${shardReady} is ready!`);
    }
}