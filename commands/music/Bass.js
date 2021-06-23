module.exports = {
    name: 'bassboosted',
    shortname: ["bass"],
    disable: false,
    categories: "music",
    description: "Set Bass for Player",
    async execute(msg, args) {
        await msg.client.pFilters.playerBassBoost(args[0], msg);
    }
}