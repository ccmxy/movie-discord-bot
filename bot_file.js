const Discord = require('discord.js');
 const client = new Discord.Client();
 const imdb = require('imdb-api')


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

   // import imdb = require('imdb');

const cli = new imdb.Client({apiKey: 'f8628755'});
cli.search({'name': 'The Toxic Avenger'}).then((search) => {
  for (const result of search.results) {
    console.log(result.title);
  }
});


   // msg.reply('pong');
 }



 });

client.login('NjEzMzcxMzc2NTAxMjYwMzAw.XVwDhg.cz26kJabGupPZ5Hqzs34MLRrb18');
