// Comando de exemplo PING 
let {Command} = require('discordcs') // Utilizar isso em cada comando novo 👌
class ping extends Command{
     constructor(bot){
          super(bot,{
               command: 'ping', // Nome do comando
      })
     }

     async startCommand(message, args){
          message.channel.send(`pong, sua latencia é de ${parseInt(bot.ping)}ms`)
     }
}

module.exports = ping // Modulo exportado do comando
