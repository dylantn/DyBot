const Discord = require("discord.js")

module.exports = {
    name: 'invite',
    description: "this is a invite command!",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('The DyBot Invite Link')
        .setURL('https://discord.com/oauth2/authorize?client_id=717036535010295909&scope=bot&permissions=2146958847')
        .setDescription('Use this link to invite DyBot to Your Server')
        .setFooter('DyBot Be Epic, Right? idk so review our bot on top.gg!', 'https://i.imgur.com/nM2cfUo.png');
    
    message.channel.send(embed);
        }
    }
