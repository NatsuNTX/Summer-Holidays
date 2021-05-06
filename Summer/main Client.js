/* Class Client, Ini Di mana Yang Berfungsi sebagai start Point */

//Masukin Library Yang Di Perlukan
const {Client} = require('discord.js');
const {summerEvents} = require('../supports/events/Events Handlers');
const summerCommands = require('../supports/commands/Command Handler');
const db = require('../supports/database/databaseHandler');
const summerPlayerNode = require('../supports/Music Player/PlayerNodes');
const summerPlayerManager = require('../supports/Music Player/Player Manager');
const summerPlayerControls = require('../supports/Music Player/Controls/Player Controls');
const summerActionCenter = require('../supports/moderation/summer Action Center');
const {BotActivity} = require('./Activity/Summer Activity');
const {Server1, serverOptions} = require('../settings/Music Server.json');

/* Test Subject */
const exitHandler = require('../supports/user Interuption/catch SIGINT');


class Summer extends Client {
    constructor(Bot_Token, clientOpts) {
        super(clientOpts);

        this.tkn = Bot_Token;
        this.ConnectToDiscord().catch(err => console.error(err));
    }
    async ConnectToDiscord() {
        await this.login(this.tkn);
        exitHandler(this);
        new summerEvents(this);
        new summerCommands(this);
        db();
        await BotActivity(this);

        /* Action Center */
        this.sAction = new summerActionCenter();

        /* Lavalink Server */
        this.pManager = new summerPlayerManager(this);
        this.pControls = new summerPlayerControls(this);
        this.playerNode = new summerPlayerNode(this, Server1, serverOptions);
    }
}
module.exports = Summer;