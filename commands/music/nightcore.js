module.exports = {
    name: 'nightcore',
    shortname: ["nc"],
    disable: false,
    categories: "music",
    description: "Change Playback Mode to Nightcore",
    async execute(msg, args) {
        await msg.client.pFilters.nightCore(args[0],msg);
    }
}