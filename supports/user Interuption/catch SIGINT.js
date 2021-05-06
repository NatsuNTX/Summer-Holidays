//Stuff
const clr = require('chalk');
const mongoose = require('mongoose');

//Audio Loader
const aLoad = require('audio-loader');
const aPlay = require('audio-play');

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
                    //Disconnect Database Connection
                    mongoose.disconnect().then(()  => {
                        //Destroy The Client
                        this.summer.destroy();
                        //Play Bye Sounds
                        console.log(clr.cyan('Bye!'));
                        aLoad('./assets/audio/bye.wav').then(aPlay);
                        setTimeout(() => {
                            //End the Process
                            process.exit();
                        }, 1500);
                    });
                });
            }
            //Disconnect Database Connection
            mongoose.disconnect().then(() => {
                //Destroy The Client
                this.summer.destroy();
                //Play Bye Sounds
                console.log(clr.cyan('Bye!'));
                aLoad('./assets/audio/bye.wav').then(aPlay);
                setTimeout(() => {
                    //End the Process
                    process.exit();
                }, 1500);
            });
        });
    }
}

module.exports = userInterrupt;