module.exports = {
    name: 'volume',
    shortname: ["vol"],
    disable: false,
    description: "Set Player Volume",
    categories: "music",
    async execute(msg, args) {
        await msg.client.pControls.PlayerVolume(msg, args[0]);
    }
}