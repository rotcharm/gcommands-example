const { Command, CommandType } = require('gcommands');

new Command({
    name: 'ping',
    description: 'Returns pong!',
    type: [ CommandType.SLASH ],
    
    run: ({ interaction }) => {
        return interaction.reply(`Pong!`);
    }
});