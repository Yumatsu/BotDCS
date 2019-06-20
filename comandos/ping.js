let {Command} = require('discordcs')
class ping extends Command{
     constructor(bot){
          super(bot,{
               command: 'ping',
      })
     }

     async startCommand(message, args){
          message.channel.send(`pong, sua latencia é de ${parseInt(bot.ping)}ms`)
     }
}

module.exports = ping