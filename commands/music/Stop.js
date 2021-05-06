module.exports = {
    name: 'stop',
    //shortname: [""],
    disable: false,
    description: "Stop Music That Currently Playing",
    categories: "music",
    async execute(msg) {
        await msg.client.pControls.stopMusic(msg, msg.client.pManager, msg.guild.id);
    }
}