//Import Stuff
const clr = require('chalk');
const {readdir} = require('fs');
const sEmbed = require('../embed/embed Files');
const { UNKNOWN_COMMANDS } = require('../../settings/Gif Expression.json');
const {Collection} = require('discord.js'); //Discord.js Mapper
const {cmdCategory} = require('./Commands Category.json');
const getDataHandler = require('../database/Get Data Handler');
const db = new getDataHandler();

class summerCommands {
    constructor(Client) {
        this.summer = Client;
        this.summer.collection = new Collection();
        //Jalankan Metode di bawah
        this.loadCommandsFiles();
        this.executeCommands();
    }

    async loadCommandsFiles() {
        for (let subDir of cmdCategory) {
            readdir(`./commands/${subDir}/`, {encoding:"utf-8"}, (err, sDir) => {
                if(err) return console.error(clr.red(`Found Error while Opening Sub-Directory\\n Error:${err}`));
                for(let files of sDir) {
                    if(!files.endsWith('.js')) return;
                    const cmdFunction = require(`../../commands/${subDir}/${files}`);
                    if(cmdFunction.disable) return;
                    this.summer.collection.set(cmdFunction.name, cmdFunction);
                    console.log(clr.cyan(`Loading Commands [${cmdFunction.name}]`));
                }
            })
        }
        /*
        //Loop Setiap SubDir
        for (const subDir of cmdCategory) {
            const sDir = await readSubDir(`./commands/${subDir}/`).catch(e => console.error(clr.red(`Found Error while Opening Sub-Directory\n Error:${e}`)));
            //lakukan Loop untuk mencari file command di dalam sub-directory
            for (const files of sDir) {
                //Bukan File Javascript?, Abaikan
                if(!files.endsWith('.js')) return;
                //Ambil Fungsi yang ada di file commands
                const cmdFunction = require(`../../commands/${subDir}/${files}`);
                //Jika properties disable di set ke true, maka skip
                if(cmdFunction.disable) return;
                //Masukan Semua Data ke Dalam Map
                this.summer.collection.set(cmdFunction.name, cmdFunction);
                console.log(clr.cyan(`Loading Commands [${cmdFunction.name}]`));
            }
        }

         */
    }
    async executeCommands() {
        this.summer.on('message', async msg => {
            //Bot Prefix
            const B_prefix = await db.customPrefix(msg.guild.id) ? await db.customPrefix(msg.guild.id) : process.env.PREFIX
            //Kita Mau agar bot Respon ketika di mention tapi ngak respon dengan @everyone atau @here
            //dan pastikan bot tidak respon dengan bot lain
            if(msg.mentions.has(this.summer.user.id) && !msg.content.includes('@here') && !msg.content.includes('@everyone')) return msg.channel.send(`${msg.author} My Prefix is ***${B_prefix}*** if you need to know what i can do Please type ***${B_prefix}help***`);
            if(!msg.content.startsWith(B_prefix) || msg.author.bot || !msg.guild) return;

            //Pisahkan antara nama command dengan command arguments
            const args = msg.content.slice(B_prefix.length).split(" ");
            //Hapus Prefix agar dapat nama command
            const cmdName = args.shift().toLowerCase();

            //Ambil nama command berserta function yang udh tersimpan di map
            const commands = this.summer.collection.get(cmdName) || this.summer.collection.find(shrt => shrt.shortName && shrt.shortName.includes(cmdName));

            //Jika command tidak ada di map, maka bilang bahwa command tersebut tidak ada
            if(!commands) {
                msg.channel.send(new sEmbed({
                    title: "Unknown Commands",
                    description: `${msg.author} I Can't Find that Command, Are You Sure you already type the Correct Name?`,
                    image: {url: UNKNOWN_COMMANDS}
                }));
                return console.log(clr.yellow(`Cannot Find Commands [${cmdName}] | Requested from ${msg.guild.name}`));
            }
            //pakai Try-Catch block jadi jika error maka tidak bikin bot crash
            try {
                commands.execute(msg, args);
                console.log(clr.green(`Running Command [${commands.name}] from [${msg.guild.name}]`));
            } catch (e) {
                msg.channel.send(`${msg.author} Sorry..., I Can't run that command for Now, because i found some problem!`);
                console.error(clr.red(`Found a Error in Commands [${commands.name}]\n Error:${e}`));
            }
        });
    }
}
module.exports = summerCommands