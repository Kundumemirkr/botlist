const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('Suspects Sunucu Menüsü')

  .addField("• | !botekle",`__Bot Eklersiniz__`)
  
  .addField("• | !botlist-ayar",`__Botlisti Ayarlarsınız__`)
  
  .addField("• | !bot-reddet",`__Bot Reddedersiniz__`)
  
  .addField("• | !bot-onayla",`__Bot Onaylarsınız__`)

  
  .setDescription("[Ekle](Bot Davet Linki) | [Destek](Destek Sunucun) " )
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help', 'h', 'y', 'yardım']

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}
