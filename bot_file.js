const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {

   // var str = "Visit Microsoft!";
   // var res = str.replace("Microsoft", "W3Schools");
   // msg.reply(res);
   //

 msg.reply('pong');
 }
 if (msg.content.startsWith('.torrent ')) {
   var filmname = msg.content.substring(9,msg.content.length);

   // var filmname = msg.content.substring(0, msg.content.substring.length);
   msg.reply(filmname)


   // msg.reply('pong');
 }



 });

client.login('NjEzMzcxMzc2NTAxMjYwMzAw.XVwDhg.cz26kJabGupPZ5Hqzs34MLRrb18');
