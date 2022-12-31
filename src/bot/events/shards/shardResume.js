const { Listener, Logger } = require('gcommands');

new class ShardResume extends Listener {
    constructor() {
        super({
            name: 'shardResume',
            event: 'shardResume'
        });
    }

    run(shardResume) {
        Logger.info(`Shard ${shardResume} is resumed!`);
    }
}