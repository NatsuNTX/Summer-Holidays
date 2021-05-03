//Stuff
const {Shoukaku} = require('shoukaku');
const clr = require('chalk');

class summerPlayerNode extends Shoukaku {
    constructor(client,LavaServer, Options) {
        super(client,LavaServer,Options);
        //Load Metode di bawah
        this.PlayerStatus
    }

    get PlayerStatus() {
        this.on("ready", (name) => {
            console.log(clr.greenBright(`Successfully Connect To Node "${name}"`));
        });

        this.on("error", (name, error) => {
            console.log(clr.redBright(`Something wrong when try to Connect to ${name}\n` + `${error}`));
        });
        this.on("close", (name, code, reason) => {
            console.log(clr.redBright(`Connection Close from ${name} with Code:${code}\n` + `Reason:${reason}\n` + "Reconnecting in 25 Second"));
        });
    }
}
module.exports = summerPlayerNode