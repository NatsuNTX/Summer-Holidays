//Stuff
/* Database Models */
const prefix = require('./models/Prefix');

class getFromDatabase {
    async customPrefix(GuildID) {
        this.guild = GuildID;
        const prefixData = await prefix.findById(this.guild);
        if(!prefixData) return undefined;
        return prefixData.CustomPrefix;
    }
}

module.exports = getFromDatabase