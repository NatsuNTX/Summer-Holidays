//Stuff
const {HELP_COMMANDS} = require('../../settings/Gif Expression.json');
const sEmbed = require('../embed/embed Files');
const getDataHandlers = require('../database/Get Data Handler');
const db = new getDataHandlers();

async function helpCommands(message, commandsMap) {
    this.msg = message;
    this.cmdMaps = commandsMap;

    /* Temp */
    let musicCommands = [];
    let modCommands = [];

    /* Yang Akan di tampilkan di Embed */
    let music = '';
    let mod = '';


    //Ambil Semua Command Module dari map dan jadikan Array
    const cmdOnMap = this.cmdMaps.array();

    //Sekarang Kita akan Loop untuk mencari categori di setiap commands
    for (let cmd of cmdOnMap) {
        //Masukan data command nya ke dalam array yang sudah di buat sesuai dengan
        //kategori nya (if you know what i mean)

        /* Music Commands Loop */
        if(cmd.categories === 'music') {
            musicCommands.push(cmd.name)
        }
        /* Moderation Commands Loop */
        if(cmd.categories === 'moderation') {
            modCommands.push(cmd.name);
        }
    }
    /* Music Commands Loop */
    for(let i = 0; i < musicCommands.length; i++) {
        music += `${musicCommands[i]}\n`
    }
    /* Moderation Commands Loop */
    for(let i = 0; i < modCommands.length; i++) {
        mod += `${modCommands[i]}\n`
    }
    await this.msg.channel.send(new sEmbed({
        title: 'Command List',
        description: `***${this.msg.author} This is my Command List So You will know what i can do for you!***`,
        fields: [{name: 'Music:', value: music ? music : "Hemm... is Empty right Here, Maybe the Commands is Disable or Not Available", inline: true},
            {name: 'Moderation:', value: mod ? mod : "Hemm... is Empty right Here Maybe the Commands is Disable or Not Available", inline: true}],
        image: {url:HELP_COMMANDS},
        footer: {text: `My Prefix is "${await db.customPrefix(this.msg.guild.id) ? await db.customPrefix(this.msg.guild.id) : process.env.PREFIX}", if You want to Run a Commands please type\n "${await db.customPrefix(this.msg.guild.id) ? await db.customPrefix(this.msg.guild.id) : process.env.PREFIX}[command Name]"`}
    }));


    /*Jika kita Lihat Maka data yang ada di variable MusicCommands adalah
     * data commands yang berhubungan dengan musik
     * begitu juga dengan yang lainnya
     * sehingga kita tidak perlu menambahkan secara manual atau hard code
     * karena akan secara otomatis akan di tambahkan (jika ada perubahan / command baru)
     * biasanya bot harus di restart agar data yang baru dapat di tampilkan
     *
     * console.log(musicCommands);
     * console.log(testingCommands);
     */

}

module.exports = helpCommands