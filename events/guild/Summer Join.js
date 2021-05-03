//Import Stuff
const sEmbed = require('../../supports/embed/embed Files');
const welText = require('../../settings/Welcome.json');
const clr = require('chalk');
const {FIRST_JOIN} = require('../../settings/Gif Expression.json');

module.exports = {
    event: 'guildCreate',
    once: false,
    disable: false,
    async run(guild) {
        let textChannelDef = '';
        //Ambil List Channel Dari Guild
        guild.channels.cache.forEach(ch => {
            if (ch.type === 'text' &&  textChannelDef === '') {
                //Cek jika summer bisa akses text channel itu
                //jika bisa maka kirim welcome message di sana
                if(ch.permissionsFor(guild.me).has('SEND_MESSAGES')) {
                    console.log(clr.green(`Summer Has Join [${guild.name}]`));
                    textChannelDef = ch
                }
            }
        });
        textChannelDef.send(new sEmbed({
            title: welText.Welcome.Title,
            description: welText.Welcome.Description,
            image: {url: FIRST_JOIN}
        }));
    }
}