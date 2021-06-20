//Stuff
const SendData = require('../database/Send Data Handler');
const sendDB = new SendData();
const sEmbed = require('../embed/embed Files');
const GetData = require('../database/Get Data Handler');
const getDB = new GetData();
const {
    DONT_HAVE_PERMISSION,
    SUCCESSFULLY_KICK,
    KICK_FAILED,
    CANT_FIND_USER,
    SUCCESSFULLY_BAN,
    BAN_FAILED
} = require('../../settings/Gif Expression.json');
const clr = require('chalk');

class summerActionCenter {
    async changePrefix(message, NewPrefix, GuildID) {
        this.msg = message;
        this.prefix = NewPrefix;
        this.guild = GuildID;

        //cek jika User mempunyai izin administrator atau user adalah pemilik guild
        if (!this.msg.member.hasPermission("ADMINISTRATOR") && this.msg.author.id !== this.msg.guild.owner.id) return this.msg.channel.send(new sEmbed({
            title: 'Access Denied!',
            description: `${this.msg.author} You... Don't Have Permission To Use that Commands!`,
            image: {url: DONT_HAVE_PERMISSION}
        }));

        if (!this.prefix) {
            return this.msg.channel.send(`${this.msg.author} to use this Commands please type ***"prefix [NewPrefix]"***\n Current Prefix for this Guild is ***"${await getDB.customPrefix(this.guild) ? await getDB.customPrefix(this.guild) : process.env.PREFIX}"***`);
        }

        const setPrefix = await sendDB.setCustomPrefix(this.prefix, this.guild, this.msg.guild.name);
        //Cek Status Code
        switch (setPrefix.Code) {
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

    /**
     *
     * @param message Discord Message Module
     * @param KickUser User to Kick
     * @param Reason The Reason Why U Want to Kick him
     * @constructor
     */
    KickMember(message, KickUser, Reason) {
        this.msg = message;
        this.guild = this.msg.guild;

        //Check if it is an admin or Guild Owner
        if (!this.msg.member.hasPermission("KICK_MEMBERS") && this.msg.author.id !== this.guild.owner.id) {
            return this.msg.channel.send(new sEmbed({
                title: 'Access Denied!',
                description: `${this.msg.author} You... Don't Have Permission To Use that Commands!`,
                image: {url: DONT_HAVE_PERMISSION}
            }));
        }
        //No User to Kick
        if (!KickUser) {
            return this.msg.channel.send(new sEmbed({
                title: "Kick Commands",
                description: "Kick Someone from Your Guild!",
                fields: [{name: "How To Use", value: `***!!kick [mention] [Reason]***`}]
            }));
        }

        //Find the User from Cache
        function findTheUser(userID, Guild) {
            let theID = "";
            if (userID.startsWith("<@!") && userID.endsWith(">")) {
                theID = userID.slice(3, -1);
            }
            if (userID.startsWith("<@&") && userID.endsWith(">")) {
                theID = userID.slice(3, -1);
            }
            return Guild.members.cache.get(theID);
        }

        const kickUser = findTheUser(KickUser, this.guild);
        //If Summer Can't Find the User From Guild
        if (!kickUser) {
            return this.msg.channel.send(new sEmbed({
                title: "[Kick] Can't Find the User!",
                description: "***Sorry.., I Can't Find the User You Are Looking For!***",
                image: {url: CANT_FIND_USER}
            }));
        }
        //Check if Summer Can Kick the User Or Not
        if (kickUser.kickable) {
            kickUser.kick(Reason ? Reason : "No Reason is Specified").then(usr => {
                return this.msg.channel.send(new sEmbed({
                    title: `[Kick] Successfully Kick ${usr.user.username} from ${this.msg.guild.name}`,
                    description: `Successfully Kick ${usr.user.username} from ${this.msg.guild.name}`,
                    fields: [{name: "Username:", value: `${usr.user.username}`},
                        {name: "Reason:", value: Reason ? Reason : "No Reason is Specified"},
                        {name: "Kick By:", value: this.msg.author}],
                    image: {url: SUCCESSFULLY_KICK}
                }));
            });
        } else {
            return this.msg.channel.send(new sEmbed({
                title: "[KICK] Failed",
                description: "***Sorry I can't Kick that User!,Make sure he/she is not an Admin!***",
                image: {url: KICK_FAILED}
            }));
        }

    }

    /**
     *
     * @param message Discord Message Module
     * @param BanUser Use to Ban
     * @param Reason The Reason u Want to Ban him
     * @constructor
     */
    BanMember(message, BanUser, Reason) {
        this.msg = message;
        this.guild = this.msg.guild;

        //Check for Permission First
        if (!this.msg.member.hasPermission("BAN_MEMBERS") && this.msg.author.id !== this.guild.owner.id) {
            return this.msg.channel.send(new sEmbed({
                title: 'Access Denied!',
                description: `${this.msg.author} You... Don't Have Permission To Use that Commands!`,
                image: {url: DONT_HAVE_PERMISSION}
            }));
        }
        //No User its Mentions
        if (!BanUser) {
            return this.msg.channel.send(new sEmbed({
                title: "Ban Commands",
                description: "Ban Someone from Your Guild!",
                fields: [{name: "How To Use", value: `***!!ban [mention] [Reason]***`}]
            }));
        }
        //Find the User From Guild Cache
        function findTheUser(userID, Guild) {
            let theID = "";
            if (userID.startsWith("<@!") && userID.endsWith(">")) {
                theID = userID.slice(3, -1);
            }
            if (userID.startsWith("<@&") && userID.endsWith(">")) {
                theID = userID.slice(3, -1);
            }
            return Guild.members.cache.get(theID);
        }
        let banUser = findTheUser(BanUser, this.guild);
        //Check if The User is in the Guild
        if(!banUser) {
            return this.msg.channel.send(new sEmbed({
                title:"[BAN] Can't Find the User!",
                description: "***Sorry..., I Can't Find the User You Are Looking For***",
                image: {url:CANT_FIND_USER}
            }));
        }
        //Check if Summer Able to Ban the User
        switch (banUser.bannable) {
            case true:
                banUser.ban({reason: `${Reason ? Reason : "No Reason is Specified!"}`}).then(ban => {
                    return this.msg.channel.send(new sEmbed({
                        title: `[Ban] Successfully ban ${ban.user.username} from ${this.guild.name}`,
                        description: `***Successfully ban ${ban.user.username} from ${this.guild.name}***`,
                        fields:[{name:"Username:", value: `***${ban.user.username}#${ban.user.discriminator}***`},
                            {name:"Reason:", value: `***${Reason ? Reason : "Reason is Not Specified!"}***`}],
                        image:{url:SUCCESSFULLY_BAN}
                    }));
                });
                break
            case false:
                return this.msg.channel.send(new sEmbed({
                    title: "[BAN] Failed",
                    description: `***Cannot Ban ${banUser.user.username} Make Sure he/she is Not admin or the Owner it self!***`,
                    image:{url:BAN_FAILED}
                })).then(b => b.delete({timeout:26000}));
        }
    }
}

module.exports = summerActionCenter