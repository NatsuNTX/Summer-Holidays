//Stuff
const clr = require('chalk');
const sendData = require('../../supports/database/Send Data Handler');
const dbSend = new sendData();

module.exports = {
    event: 'guildDelete',
    once: false,
    disable: false,
    async run(guild) {
        console.log(clr.yellowBright(`Summer Has Been Kick from ${guild.name}!`));
        await dbSend.deleteAllData(guild.id);
    }
}