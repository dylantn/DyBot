module.exports = {
    name: 'verify',
    description: "this is a verify command!",
    execute(message, args){

        if(message.member.roles.cache.has('723105928643346493')){
            message.channel.send('ARE U NOT A MEMBER ALREADY!!!');



        } else {
            message.channel.send('You Are Now A DANKERED Member, YAY');
            message.member.roles.add('723105928643346493');
        }
}}