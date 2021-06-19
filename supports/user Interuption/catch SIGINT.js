//Stuff
const clr = require('chalk');
const mongoose = require('mongoose');

/* [Wait Until I Found Stop Sound]
//Audio Loader
const aLoad = require('audio-loader');
const aPlay = require('audio-play');
 */

function userInterrupt(Client) {
    this.summer = Client;

    //Check for System Platform
    if (process.platform === 'win32') {
        process.on('SIGINT', () => {
            console.log(clr.yellow("Ctrl + C Detected!,Shutting Down Summer Bot."));
            //Disconnect from Voice Channel if Bot is Still Playing Music
            if (this.summer.playerNode.players) {
                this.summer.playerNode.players.forEach(p => {
                    p.stopTrack().then(() => p.disconnect());
                    //Just Disconnect From Database and Discord
                    //and the End
                    DisconnectEverything(this.summer);
                });
            }
            DisconnectEverything(this.summer);
        });
    }
    if (process.platform === 'linux') {
        process.on("SIGINT", () => {
            if (this.summer.playerNode.players) {
                this.summer.playerNode.players.forEach(p => {
                    p.stopTrack().then(() => p.disconnect());
                    DisconnectEverything(this.summer);
                });
            }
            DisconnectEverything(this.summer);
        });
    }
}

    function DisconnectEverything(Client) {
    mongoose.disconnect().then(() => {
        Client.destroy();
        console.log(clr.cyan("Bye!"));
        setTimeout(() => {
            process.exit();
        }, 2500);
    });
    }

module.exports = userInterrupt;