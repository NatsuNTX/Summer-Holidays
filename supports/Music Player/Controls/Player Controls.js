/**
 * Tempat Di Mana Semua Command Musik melakukan
 * proses
 * If You want to Edit Please Read the Doc first from this link
 * https://deivu.github.io/Shoukaku/?api#Shoukaku
 */

const sEmbed = require('../../embed/embed Files');
const {MUSIC_UNKNOWN_LINK} = require('../../../settings/Gif Expression.json');

class summerPlayerControls {
    constructor(client) {
        this.summer = client;
    }

    async PlayMusic(NameOrUrl, message) {
        this.tracks = NameOrUrl;
        this.msg = message;

        //Cek Apakah User sudah tersambung ke dalam voice channel terlebih dahulu
        if (!this.msg.member.voice.channel) return this.msg.channel.send(`${this.msg.author}***You Need to Join to The Voice Channel First Before Running This Commands!***`);
        if (!this.tracks) {
            const guildPlayer = this.msg.client.pManager.get(this.msg.guild.id);
            if(!guildPlayer) {
                return this.msg.channel.send(`${this.msg.author}***Please Tell Me the Song name or the Link***`);
            } else {
                if(guildPlayer.player.paused === false) {
                    return this.msg.channel.send(`${this.msg.author}***Please Tell Me the Song name or the Link***`);
                } else {
                    await guildPlayer.player.setPaused(false);
                    return this.msg.channel.send(`:arrow_forward: ***Resuming Player***`).then(c => c.delete({timeout: 4500}));
                }
            }
        }

        //Cek jika input nya adalah sebuah link
        //atau bukan
        function isUrl(url) {
            try {
                new URL(url);
                return true
            } catch {
                return false
            }
        }

        //Ambil Lavalink Node Server
        const L_node = this.summer.playerNode.getNode();

        //Jika Input nya adalah url
        if (isUrl(this.tracks)) {
            //Gunakan Lavalink Node untuk Memproses Link
            //Data yang return seharusnya 64bit hash berserta info
            const linkData = await L_node.rest.resolve(this.tracks);
            //Jika Hasil dari Lavalink Node tidak menemukan apapun dari link
            //maka bilang kalau ngak ada musik yang di temukan di link tersebut
            if (!linkData) return this.msg.channel.send(new sEmbed({
                title: "No Track Data",
                description: `${this.msg.author} I Can't Find Any Track Data from that Link!`,
                image: {url: MUSIC_UNKNOWN_LINK}
            }));
            //Ambil Nama Playlist, Track Data, dan tipe dari LinkData
            const {playlistName, tracks, type} = linkData
            //Ambil Track Paling Pertama

            const firstTracks = tracks.shift();
            const p_Handle = await this.summer.pManager.playerHandlers(this.msg, L_node, firstTracks);

            //Jika Tipe Data nya adalah Playlist
            //Maka Ambil Semua data yang ada di Playlist lalu masukan ke dalam queue
            if (type === "PLAYLIST") {
                for (let l of tracks) await this.summer.pManager.playerHandlers(this.msg, L_node, l);
            }
            this.msg.channel.send(type === "PLAYLIST" ? `:white_check_mark: Added Playlist **${playlistName}** to the Queue!` : `:white_check_mark: Added **${firstTracks.info.title}** to the queue!`).then(c => c.delete({timeout: 4500}));
            //Terahir Mainkan
            if (p_Handle) return p_Handle.playTheTracks();
        } else {
            const linkData = await L_node.rest.resolve(this.tracks, 'youtube');
            if (!linkData) return this.msg.channel.send(new sEmbed({
                title: "No Track Data",
                description: `${this.msg.author} I Can't Find Any Track Data from that Link!`,
                image: {url: MUSIC_UNKNOWN_LINK}
            }));
            const firstTracks = linkData.tracks.shift();
            const p_Handle = await this.summer.pManager.playerHandlers(this.msg, L_node, firstTracks);
            this.msg.channel.send(`:white_check_mark: Successfully Add ***${firstTracks.info.title}*** to the Queue!`).then(c => c.delete({timeout: 4500}));
            if (p_Handle) return p_Handle.playTheTracks();
        }
    }
    async stopMusic(message,LavaPlayer, GuildID) {
        this.L_Player = LavaPlayer;
        this.guild = GuildID;
        this.msg = message;

        //Cek Jika User sudah ada di Voice Channel
        if (!this.msg.member.voice.channel) return this.msg.channel.send(`${this.msg.author}***You Need to Join to The Voice Channel First Before Running This Commands!***`);

        const players = this.L_Player.get(this.guild);
        //Jika User Menjalankan command Stop tapi Bot Belum Terkonek ke Voice Channel
        //maka Bilang bahwa command stop hanya bisa di jalankan ketika player sedang memainkan sesuatu
        if(!players) return this.msg.channel.send(`Ahh.... Theirs nothing that currently Playing!`);

        //Jika User Menjalankan Command Tapi terhubung dengan voice Channel yang berbeda dari
        //Bot yang tersambung maka Tolak
        if (players.player.voiceConnection.voiceChannelID !== this.msg.member.voice.channelID) return this.msg.channel.send("**You Need to be In the Same Voice Channel!**");

        this.msg.channel.send(`:stop_button: ***Stopping ${players.currentTrack.info.title}***`).then(c => c.delete({timeout:4500}));
        //Hapus Semua Track List Dari Queue
        players.queue.length = 0
        await players.player.stopTrack();
    }
    async skipMusic(message, LavaPlayer, GuildID) {
        this.L_Player = LavaPlayer;
        this.msg = message;
        this.guild = GuildID;

        //Cek Jika User sudah ada di Voice Channel
        if (!this.msg.member.voice.channel) return this.msg.channel.send(`${this.msg.author}***You Need to Join to The Voice Channel First Before Running This Commands!***`);
        const players = this.L_Player.get(this.guild);
        if(!players) return this.msg.channel.send(`Ahh.... Theirs nothing that currently Playing!`);

        //Jika User Menjalankan Command Tapi terhubung dengan voice Channel yang berbeda dari
        //Bot yang tersambung maka Tolak
        if (players.player.voiceConnection.voiceChannelID !== this.msg.member.voice.channelID) return this.msg.channel.send("**You Need to be In the Same Voice Channel!**");

        this.msg.channel.send(`:next_track: ***Skipping ${players.currentTrack.info.title}***`).then(c => c.delete({timeout:4500}));
        await players.player.stopTrack();
    }
    async pauseMusic(message,GuildID) {
        this.msg = message;
        this.guild = GuildID;

        //Cek Jika User sudah ada di Voice Channel
        if (!this.msg.member.voice.channel) return this.msg.channel.send(`${this.msg.author}***You Need to Join to The Voice Channel First Before Running This Commands!***`);
        const players = this.msg.client.pManager.get(this.guild);
        if(!players) return this.msg.channel.send(`Ahh.... Theirs nothing that currently Playing!`);

        //Jika User Menjalankan Command Tapi terhubung dengan voice Channel yang berbeda dari
        //Bot yang tersambung maka Tolak
        if (players.player.voiceConnection.voiceChannelID !== this.msg.member.voice.channelID) return this.msg.channel.send("**You Need to be In the Same Voice Channel!**");
        if(players.player.paused) {
            return this.msg.channel.send(`${this.msg.author} I Can't Do that Because the Player is Already Pause!`)
        }
        players.player.setPaused(true).then(() => {
            return this.msg.channel.send(`:pause_button: ***Player Has Been Pause!, Please Type "play" to resume!***`).then(c => c.delete({timeout: 4500}))
        });
    }
}
module.exports = summerPlayerControls