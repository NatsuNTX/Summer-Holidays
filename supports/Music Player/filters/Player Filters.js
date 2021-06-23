/**
 * If You want to Edit Please Read the Doc first from this link
 * https://deivu.github.io/Shoukaku/?api#ShoukakuFilter
 */

//Stuff
const embed = require('../../embed/embed Files');
/* Bass Config */
const {Low,Medium,High,Off} = require('./bass Boost/bass_config.json');
/* Nightcore Config */
const ncConfig = require('./nightcore/nightcore_config.json');

class SummerPlayerFilters {
    /**
     *
     * @param level Bass Level
     * @param message Discord Message Module
     */
    async playerBassBoost(level, message) {
        this.msg = message;
        this.guild = this.msg.guild

        //Cek Jika User sudah ada di Voice Channel
        if (!this.msg.member.voice.channel) return this.msg.channel.send(`${this.msg.author}***You Need to Join to The Voice Channel First Before Running This Commands!***`);

        const players = this.msg.client.pManager.get(this.guild.id);
        //Jika User Menjalankan command Stop tapi Bot Belum Terkonek ke Voice Channel
        //maka Bilang bahwa command stop hanya bisa di jalankan ketika player sedang memainkan sesuatu
        if(!players) return this.msg.channel.send(`Ahh.... Theirs nothing that currently Playing!`);

        //Jika User Menjalankan Command Tapi terhubung dengan voice Channel yang berbeda dari
        //Bot yang tersambung maka Tolak
        if (players.player.voiceConnection.voiceChannelID !== this.msg.member.voice.channelID) return this.msg.channel.send("**You Need to be In the Same Voice Channel!**");

        if(!level) {
            return this.msg.channel.send(new embed({
                title: "Bass Boosted",
                description: "Type !!bass [Level] to Activate Bass Boosted"
            }));
        }
        switch(level.toLowerCase()) {
            case "low":
                await players.player.setEqualizer(Low);
                this.msg.channel.send("Set Bass Boosted to **Low**").then(c => c.delete({timeout:6000}));
                break;
            case "medium":
                await players.player.setEqualizer(Medium);
                this.msg.channel.send("Set Bass Boosted to **Medium**").then(c => c.delete({timeout:6000}));
                break;
            case "High":
                await players.player.setEqualizer(High);
                this.msg.channel.send("Set Bass Boosted to **High**").then(c => c.delete({timeout:6000}));
                break;
            case "off":
                await players.player.setEqualizer(Off);
                this.msg.channel.send("Set Bass Boosted to **Off**").then(c => c.delete({timeout:6000}));
                break;
           default:
               this.msg.channel.send("Please Select ***Low/Medium/High/Off***").then(c => c.delete({timeout:6000}));
        }
    }

    /**
     *
     * @param promp ON/OFF
     * @param message Discord Message Module
     */
    async nightCore(promp, message) {
        this.msg = message;
        this.guild = this.msg.guild;

        //Cek Jika User sudah ada di Voice Channel
        if (!this.msg.member.voice.channel) return this.msg.channel.send(`${this.msg.author}***You Need to Join to The Voice Channel First Before Running This Commands!***`);

        const players = this.msg.client.pManager.get(this.guild.id);
        //Jika User Menjalankan command Stop tapi Bot Belum Terkonek ke Voice Channel
        //maka Bilang bahwa command stop hanya bisa di jalankan ketika player sedang memainkan sesuatu
        if(!players) return this.msg.channel.send(`Ahh.... Theirs nothing that currently Playing!`);

        //Jika User Menjalankan Command Tapi terhubung dengan voice Channel yang berbeda dari
        //Bot yang tersambung maka Tolak
        if (players.player.voiceConnection.voiceChannelID !== this.msg.member.voice.channelID) return this.msg.channel.send("**You Need to be In the Same Voice Channel!**");

        if(!promp) {
            return this.msg.channel.send(new embed({
                title: "NightCore Command",
                description: "To Use it Please Type, !!nightcore [ON/OFF]"
            }));
        }
        switch(promp.toLowerCase()) {
            case "on":
                await players.player.setTimescale(ncConfig);
                this.msg.channel.send("NightCore Mode is **ON**").then(c => c.delete({timeout:6000}));
                break;
            case "off":
                await players.player.setTimescale({rate:1,pitch:1,speed:1});
                this.msg.channel.send("NightCore Mode is **OFF**").then(c => c.delete({timeout:6000}));
                break;
        }
    }
}
module.exports = SummerPlayerFilters