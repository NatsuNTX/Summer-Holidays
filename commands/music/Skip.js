module.exports = {
    name: 'skip',
    //shortname: [""],
    disable: false,
    description: "Skip Music that Currently Playing",
    categories: "music",
    async execute(msg) {
        await msg.client.pControls.skipMusic(msg, msg.client.pManager, msg.guild.id);
    }
}