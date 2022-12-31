const { Listener, Logger } = require('gcommands');

new class Ready extends Listener {
    constructor() {
        super({
            name: 'ready',
            event: 'ready'
        });
    }

    run(client) {
        client.user.setActivity("/ping | by Sparrow");
    }
}