//Stuff
const sEmbed = require('../embed/embed Files');
const clr = require('chalk');
const {PLAYING_MUSIC} = require('../../settings/Gif Expression.json');
const {version} = require('../../package.json');
const {playerEnds} = require("../../settings/Music Server.json");

class summerPlayerBackend {
    constructor(opts) {
        this.client = opts.client;
        this.queue = []; //Tempat buat Menyimpan List Music
        this.player = opts.player;
        this.guild = opts.guild;
        this.message = opts.message;
        this.authorMessage = opts.authorMessage;
        this.currentTrack = null;
        this.tempEmbed = [];

        //Ketika Musik di mainkan
        this.player.on('start', () => {
            console.log(clr.greenBright(`Now Playing:${this.currentTrack.info.title} | Requested [${this.authorMessage.author.username}]`));
            const startPlay = new sEmbed({
                title: ":cd: Summer Player",
                thumbnail: {url: this.client.user.displayAvatarURL({size: 1024, format: "webp"})},
                description: "Summer Music Player",
                fields: [{
                    name: ":musical_note: Now Playing:",
                    value: `**${this.currentTrack.info.title}** [${this.authorMessage.author}]`
                },
                    {
                        name: ":memo: Next Song:",
                        value: `***${this.queue.length ? this.queue[0].info.title : "Hemm... Its Empty Right Here :/"}***`
                    }],
                footer: {
                    text: `Volume:${this.player.filters.volume * 100}% | Version:${version}`,
                    iconURL: this.client.user.displayAvatarURL({size: 1024, format: "webp"})
                },
                image: {url: PLAYING_MUSIC}
            });
            this.message.send(startPlay).then(c => this.tempEmbed[0] = c);
        });
        //Ketika Finish
        this.player.on("end", () => {
            this.message.messages.delete(this.tempEmbed[0]);
            this.playTheTracks().catch(err => {
                //Jika Terjadi Sesuatu Maka Matikan Player
                this.queue.length = 0;
                this.stopPlayer();
                console.error(clr.red(`Something Wrong While Try to Play A Song!,${err}`));
            });
        });
        //Ada Masalah Dengan Track Data
        this.player.on("trackException", (reason) => {
            const PlayerErrorEmbed = new sEmbed({
                title: ":cd: Summer Player",
                description: `Uh..o..ohh, Sorry ${this.authorMessage.author} I Can't Play That Song for You Because I Found **a Error** White Try To Play it!, :(`
            });
            this.message.send(PlayerErrorEmbed);
            console.error(clr.redBright(`Error on Media Player:${JSON.stringify(reason, null, 2)}`));
        });
        /* Lakukan Sesuatu jika Player dapat closes,error,nodedisconnect */
        const errorEvent = ["closed", "nodeDisconnect", "error"];
        for (const error of errorEvent) {
            this.player.on(error, errorData => {
                if (errorData instanceof Error || errorData instanceof Object) console.error(clr.redBright(errorData));
                this.queue.length = 0 //Remove All Track from Queue
                this.stopPlayer();
            })
        }
    }
    /* Ambil Guild ID jika player sedang di pakai */
    get stillPlaying() {
        return this.client.pManager.has(this.guild.id);
    }

   async playTheTracks() {
        //Jika Bot Tidak Memainkan apapun atau tidak ada track list di queue
        //maka keluar dari Voice Channel
        if (!this.stillPlaying || !this.queue.length) return this.stopPlayer()
        //Ambil Track Paling Pertama dari queue
        this.currentTrack = this.queue.shift();
        //Mainkan Track
        await this.player.playTrack(this.currentTrack.track);
    }

    stopPlayer() {
        console.log(clr.yellowBright(`Shutting Down Music Player from "${this.guild.name}" | ${this.guild.id}`));
        //Hapus Semua Track List dari queue (jika ada)
        this.queue.length = 0;
        //Disconnect Music player dan hapus Guild ID dari Server Node
        this.player.disconnect();
        this.client.pManager.delete(this.guild.id);
        //Kirim Pesan Selesai
        this.message.send(playerEnds).then(c => c.delete({timeout: 4500}));
    }
}
module.exports = summerPlayerBackend