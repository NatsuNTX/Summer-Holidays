/* Class Client, Ini Di mana Yang Berfungsi sebagai start Point */

//Masukin Library Yang Di Perlukan
const {Server1, serverOptions} = require('../settings/Music Server.json');
const {Client} = require('discord.js'); //Discord.js Library (Ambil Class Client, because that what we need to build first)
const clr = require('chalk'); //Ngasi Warna ke Console
const eventsHandler = require('../supports/events/Events Handlers');
const commandHandler = require('../supports/commands/Command Handler');
const summerPlayerNode = require('../supports/Music Player/PlayerNodes');
const db = require('../supports/database/databaseHandler');
const summerPlayerManager = require('../supports/Music Player/Player Manager');
const summerPlayerControls = require('../supports/Music Player/Controls/Player Controls');


class summerNTX extends Client {
    /**
     * Main Files
     * @param DiscordToken Bot Token dari Discord.com/developer
     * @param ClientOpts Client Options Baca di discord.js.org kategori client
     */
    constructor(DiscordToken, ClientOpts) {
        super(ClientOpts);

        this.Botkeys = DiscordToken;
        this.loadOptionalScript().catch(err => console.error(err)) //Jalankan Metode ini Ketika Client di Panggil
    }
    async loadOptionalScript() {
        await this.login(this.Botkeys); //Login Function
        this.playerNode = new summerPlayerNode(this, Server1, serverOptions);
        await eventsHandler(this); //Event Handler
        this.playerControls = new summerPlayerControls(this);
        new commandHandler(this);
        this.pManager = new summerPlayerManager(this);
        this.Botinfo //Method Below
        db() //DataBase
    }

    get Botinfo() {
        console.log(clr.cyan(`Summer Bot is Login as [${this.user.username}]`));
    }
}

//Export the Class (Biar bisa di Akses dari luar, jangan lupa pelajaran Object Oriented Programming A.K.A OOP)
module.exports = summerNTX