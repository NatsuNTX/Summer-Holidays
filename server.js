/* Remove Old One */
//Stuff
const summer = require('./Summer/main Client'); //Import our Client
const { ClientOptions } = require('./settings/ClientConfig.json'); //Discord Client Option Settings
require('dotenv').config()

//Jalankan Client
new summer(process.env.BOT_TOKEN, ClientOptions);
