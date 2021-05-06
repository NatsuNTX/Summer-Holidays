module.exports = {
    name: "prefix",
    //shortname: [""],
    disable: false,
    description: "Change the Default Prefix to Your Prefix (Only for Guild)",
    categories: "moderation",
    async execute(msg, args) {
        await msg.client.sAction.changePrefix(msg, args[0], msg.guild.id);
    }
}