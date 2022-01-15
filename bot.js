const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.login('OTMwNzg2NDczNDk2Njc4NDMw.Yd68dA.DhJS-eWx3TDwVQhTftpPRW_Rm3E');