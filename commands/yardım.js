const db = require("wio.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json"); 

exports.run = async (client, message, args) => { 

let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`CodsUP Uptime`, client.user.avatarURL())

.setColor('#00d811')
.addField(`ㅤ`,`\`${prefix}yardım\`** - Yardım Menüsünü Gösterir.**`,false)
.addField(`ㅤ`,`\`${prefix}link ekle\`** - Link Eklersiniz.** `,false)
.addField(`ㅤ`,`\`${prefix}link sil\`**  - Link Silersiniz.** `,false)
.addField(`ㅤ`,`\`${prefix}prefix ayarla/sıfırla\`** - Sunucuya Özel Prefix Ayarlarsınız.** `,false)
.addField(`ㅤ`,`\`${prefix}erişim kontrol\`** - Link Eklemek İçin İzniniz Olup Olmadığına Bakarsınız.** `,false)
.addField(`ㅤ`,`\`${prefix}link liste\`**- Sistemde Bulunan Linklerinizi Öğrenirsiniz. (DMDEN KULLAN)** `,false)
.addField(`ㅤ`,`\`${prefix}öneri \`** - Önerinizi Belirtmenizi Sağlar.** `,false)
.setImage(``)
.setThumbnail(``)
 message.channel.send(eklenti) 
  };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardım","y"],
  permLevel: 0,
}

exports.help = {
  name: 'yardım',
  description: "uptime sistemi",
  usage: "yardım "
};