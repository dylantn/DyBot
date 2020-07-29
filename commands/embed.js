const Discord = require("discord.js")

module.exports = {
    name: 'embed',
    description: "this is a embed command!",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor('Some name', 'https://i.imgur.com/nM2cfUo.png', 'https://discord.js.org')
        .setDescription('Some description here')
        .setThumbnail('https://i.ytimg.com/vi/2MtOpB5LlUA/maxresdefault.jpg')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://i.imgur.com/nM2cfUo.png')
        .setTimestamp()
        .setFooter('mm/yy', 'https://i.imgur.com/nM2cfUo.png');
    
    message.channel.send(embed);
        }
    }