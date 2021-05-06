//Stuff
const SendData = require('../database/Send Data Handler');
const sendDB = new SendData();
const sEmbed = require('../embed/embed Files');
const GetData = require('../database/Get Data Handler');
const getDB = new GetData();
const { DONT_HAVE_PERMISSION } = require('../../settings/Gif Expression.json');
const clr = require('chalk');

class summerActionCenter {
    async changePrefix(message,NewPrefix,GuildID) {
        this.msg = message;
        this.prefix = NewPrefix;
        this.guild = GuildID;

        //cek jika User mempunyai izin administrator atau user adalah pemilik guild
        if(!this.msg.member.hasPermission("ADMINISTRATOR") && this.msg.author.id !== this.msg.guild.owner.id) return this.msg.channel.send(new sEmbed({
            title: 'Access Denied!',
            description: `${this.msg.author} You... Don't Have Permission To Use that Commands!`,
            image: {url: DONT_HAVE_PERMISSION}
        }));

        if(!this.prefix) {
            return this.msg.channel.send(`${this.msg.author} to use this Commands please type ***"prefix [NewPrefix]"***\n Current Prefix for this Guild is ***"${await getDB.customPrefix(this.guild) ? await getDB.customPrefix(this.guild) : process.env.PREFIX}"***`);
        }

        const setPrefix = await sendDB.setCustomPrefix(this.prefix, this.guild, this.msg.guild.name);
        //Cek Status Code
        switch(setPrefix.Code) {
            case -20:
                console.log(clr.red(setPrefix.Message));
                this.msg.channel.send("Sorry.., But for now I Can't Save the Prefix Because there some Error while try to Saving!").then(c => c.delete({timeout: 4500}));
                break;
            case -5:
                this.msg.channel.send("Prefix shouldn't More than 4 Character").then(c => c.delete({timeout: 45000}));
                break;
            case 20:
                this.msg.channel.send(`Successfully Set Prefix for this Guild, Your New Prefix is **"${this.prefix}"**`).then(c => c.delete({timeout: 45000}));
                break;
        }
    }
}
module.exports = summerActionCenter