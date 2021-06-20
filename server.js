/* Remove Old One */
//Stuff
const summer = require('./Summer/main Client'); //Import our Client
const trace = require('./supports/memory/garbage');
const { ClientOptions } = require('./settings/ClientConfig.json'); //Discord Client Option Settings
require('dotenv').config()

//Jalankan Client
setInterval(() => {
    trace();
}, 60000)
new summer(process.env.BOT_TOKEN, ClientOptions);
