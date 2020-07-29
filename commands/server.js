const Discord = require("discord.js")

module.exports = {
    name: 'server',
    description: "this is a server command!",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle('Support Server +ADDITIONAL BOTS THAT 𝕯𝖞𝖑𝖆𝖓𝕋ℕ 𝕲𝖆𝖒𝖎𝖓𝖌 LIKES PERSONALLY')
        .setURL('https://discord.gg/4Acq2pg')
        .setDescription('It has some cool stuff, it has other external bots which most support servers **do not do**')
        .setFooter('DyBot Be Epic, Right? idk so review our bot on top.gg!', 'https://i.imgur.com/nM2cfUo.png');
    
    message.channel.send(embed);
        }
    }