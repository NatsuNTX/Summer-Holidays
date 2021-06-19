module.exports = {
    name: "kick",
    //shortname: [""],
    disable: false,
    description: "Kick Someone From Your Guild",
    categories: "moderation",
    async execute(msg, args) {
        const reason = getReason(args.join(" "));
        await msg.client.sAction.KickMember(msg, args[0], reason);
    }
}
//Remove ID From Message and Leave the Reason
function getReason(reason) {
    if(reason.startsWith("<@!")) {
        return reason.slice(23)
    }
}