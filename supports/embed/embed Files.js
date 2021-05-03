//Import Stuff
const {MessageEmbed} = require('discord.js');
const {name, version} = require('../../package.json');

class SummerEmbed extends MessageEmbed {
    constructor(embedOptions) {
        //Well No Options use Default
        if (embedOptions) {
            //Jika tidak di setting color untuk embed maka pilih secara random
            embedOptions.color = embedOptions.color === undefined ? 'RANDOM' : embedOptions.color
            //Sama Seperti di Atas hanya saja ini untuk Footer
            embedOptions.footer = embedOptions.footer === undefined ? {text: `${name} V${version}`} : embedOptions.footer
            super(embedOptions);
        } else {
            embedOptions = {
                color: "RANDOM",
                footer: {text: `${name} V${version}`}
            }
            super(embedOptions);
        }
    }
}

module.exports = SummerEmbed