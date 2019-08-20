const Discord = require('discord.js');
const client = new Discord.Client();
const imdb = require('imdb-api')


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
    if (msg.content.startsWith('.torrent ')) {
        var filmname = msg.content.substring(9, msg.content.length);

        msg.reply(filmname)


        const cli = new imdb.Client({
            apiKey: 'f8628755'
        });
        var i = 0;
        cli.search({
            'name': filmname
        }).then((search) => {
          var film_json = JSON.stringify(search, null, 2);
          console.log(film_json);

            for (const result of search.results) {
                reply_msg = i + ": " + result.title;
                if (result.year != null) {reply_msg += " (" + result.year + ")";}
                msg.reply(reply_msg);

                i++;
            }
        });
    }



});

client.login('NjEzMzcxMzc2NTAxMjYwMzAw.XVwDhg.cz26kJabGupPZ5Hqzs34MLRrb18');
