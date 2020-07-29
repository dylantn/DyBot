const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = 'dy-';
 
const fs = require('fs');

const { Client, MessageEmbed } = require('discord.js');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('DyBot is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'creator'){
        client.commands.get('creator').execute(message, args);
    } else if (command == 'server'){
        client.commands.get('server').execute(message, args)
    } else if (command == 'invite'){
        client.commands.get('invite').execute(message, args);
    } else if (command == 'embed'){
        client.commands.get('embed').execute(message, args);
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args);
    }
});
 

















client.login(process.env.token);

