//Stuff
const clr = require('chalk');

/**
 * Execute ketika bot sudah connect ke discord server
 * untuk mengetahui lebih banyak tipe events
 * silahkan klik link untuk mengetahui lebih lanjut
 * https://discord.js.org/#/docs/main/stable/class/Client
 */
module.exports = {
    event: 'ready', //Tipe Events,
    once: false,
    disable: false, //Events Switch
    run() {
        console.log(clr.cyan(`Summer is Connected to Discord and Ready to Work!`));
    }
}