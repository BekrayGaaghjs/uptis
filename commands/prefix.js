const Discord = require('discord.js')
const db = require('wio.db');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
let a = ayarlar.prefix
    let p = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
 let o = await db.fetch(`prefix.${message.guild.id}`)
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`Bu Komutu Kullanabilmek İçin Mesajları Yönet Yetkisine Sahip Olmalısınız. Şuanki Prefix: ${p}`));
  
if(args[0] === "ayarla") {
if(o) { return message.channel.send(new Discord.MessageEmbed()
.setDescription(`Ayarlanmış Şeyi Tekrar Ayarlıyamassın. Şuanki Prefix: ${p} Sıfırlamak İçin ${p}prefix sıfırla`));
      }
if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`Bir Prefix Girip Tekrar Dene. Şuanki Prefix: ${p}`));
db.set(`prefix.${message.guild.id}`, args[1])
message.channel.send(new Discord.MessageEmbed()
.setDescription(`Prefix Başarıyla ${args[0]} Ayarlandı.`));
}
    if(args[0] === "sıfırla") {
    if(!o) {
       return message.channel.send(new Discord.MessageEmbed()
.setDescription(`Ayarlanmayan Prefixi Sıfırlayamazsınız. Şuanki Prefix: ${p}`));
    }
    db.delete(`prefix.${message.guild.id}`)       
   return message.channel.send(new Discord.MessageEmbed()
.setDescription(`Prefix Başarıyla Sıfırlandı. Şuanki Prefix: ${a}`));
  }
  
 if(!args[0]) return message.channel.send(new Discord.MessageEmbed()        
.setDescription(`Prefix Ayarlamak İçin ${p}prefix ayarla <prefix> / Sıfırlamak İçin ${p}prefix sıfırla Şuanki Prefix: ${p}`));
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['p'],
    permLevel: 0
};
  
  exports.help = {
    name: 'prefix',      
    description: '',
    usage: 'prefix <giriceğiniz şey>'
};