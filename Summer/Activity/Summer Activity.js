//Stuff
const {ActivityWord, Bot_Status, Bot_Status_Stream, Live_Stream_Url, Update_Activity_Word} = require('../../settings/Activity.json');
const clr = require('chalk');

async function summerActivity(client) {
    this.summer = client;

    if(Bot_Status_Stream) {
        try {
            await this.summer.user.setStatus(Bot_Status);
            await this.summer.user.setActivity({name: `[${process.env.prefix}help] | Summer is Online!`, type:"STREAMING", url: Live_Stream_Url});
            setInterval(() => {
                this.summer.user.setActivity({name: `[${process.env.prefix}help] | ${randomWord(ActivityWord)}`, type:"STREAMING",url: Live_Stream_Url});
            }, Update_Activity_Word);
        } catch (err) {
            console.error(clr.red(`Error When Try to Load Activity Module\n Error:${err}`));
        }
    } else {
        try {
            await this.summer.user.setStatus(Bot_Status);
            await this.summer.user.setActivity({name: `[${process.env.prefix}help] | Summer is Online`, type:"LISTENING"});
            setInterval(() => {
                this.summer.user.setActivity({name: `[${process.env.prefix}help] | ${randomWord(ActivityWord)}`, type:"LISTENING"});
            }, Update_Activity_Word)
        } catch (err) {
            console.error(`Error When Try to Load Activity Module\n Error:${err}`);
        }
    }
}
function randomWord(wordList) {
    return wordList[Math.floor(Math.random() * wordList.length) + 1]
}
module.exports = {BotActivity: summerActivity}