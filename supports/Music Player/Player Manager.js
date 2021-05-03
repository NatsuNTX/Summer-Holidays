//Stuff
const playerBackEnd = require('./Player Backend');
const clr = require('chalk');


class summerPlayerManager extends Map {
    constructor(client, opts) {
        super(opts)
        this.summer = client;
    }
    async playerHandlers(message,node,Track_Data) {
        this.msg = message;
        this.L_Node = node;

        const playerIsExist = this.get(this.msg.guild.id);

        //Jika Tidak Ada Player Maka Summon Player
        if(!playerIsExist) {
            console.log(clr.cyanBright("Spawn Player On:" + this.msg.guild.name + " | " + this.msg.guild.id));
            const player = await this.L_Node.joinVoiceChannel({
                deaf: false,
                mute: false,
                guildID: this.msg.guild.id,
                voiceChannelID: this.msg.member.voice.channel.id
            });
            const pBackEnd = new playerBackEnd({
                client: this.summer,
                guild: this.msg.guild,
                message: this.msg.channel,
                authorMessage: this.msg,
                player
            });
            //Tambah Track Baru ke Dalam List queue
            pBackEnd.queue.push(Track_Data);
            //Simpan ke Dalam Map
            this.set(this.msg.guild.id, pBackEnd);
            return pBackEnd;
        }
        playerIsExist.queue.push(Track_Data);
        return null
    }
}
module.exports = summerPlayerManager