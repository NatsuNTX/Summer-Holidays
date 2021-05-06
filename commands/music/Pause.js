module.exports = {
    name: 'pause',
    //shortName: [""]
    disable: false,
    categories: "music",
    description: "Pause Music that Currently Playing",
    async execute(msg) {
        await msg.client.pControls.pauseMusic(msg, msg.guild.id);
    }
}