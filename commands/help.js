const Discord = require("discord.js")

module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .addFields(
            { name: 'Commands', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Basic Commands', value: 'string\n string\n '},
            { value: 'Some value here', inline: true },
        )
        .setImage('https://i.imgur.com/nM2cfUo.png')
        .setTimestamp()
        .setFooter('mm/yy', 'https://i.imgur.com/nM2cfUo.png');
    
    message.channel.send(embed);
        }
    }