/* Remove Old One */
//Stuff
const summer = require('./Summer/main Client'); //Import our Client
const trace = require('./supports/memory/garbage');
const { ClientOptions } = require('./settings/ClientConfig.json'); //Discord Client Option Settings
const lavalink = require('./supports/LavaServer/Run Server');
const lavaServer = new lavalink()
require('dotenv').config()

//Jalankan Client
trace();
lavaServer.FirstCall();
new summer(process.env.BOT_TOKEN, ClientOptions);
