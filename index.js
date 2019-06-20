const DiscordCS = require('discordcs')
bot = new DiscordCS.Client({
     token: 'Token do seu bot',
     prefixes: 'Prefixo do seu bot',
     readylib: false
})

bot.on('ready', () => {
     console.log('iniciado com sucesso !!')
bot.CommandsRegister.registerCommands(__dirname+'/./comandos') //Aki onde o bot irá localizar a pasta de comandos !
})
