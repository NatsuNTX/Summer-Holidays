module.exports = {
    name: "ban",
    //shortname: [""],
    disable: false,
    description: "ban Someone From Your Guild",
    categories: "moderation",
    execute(msg, args) {
        const reason = getReason(args.join(" "));
        msg.client.sAction.BanMember(msg, args[0], reason);
    }
}
//Remove ID From Message and Leave the Reason
function getReason(reason) {
    if(reason.startsWith("<@!")) {
        return reason.slice(23)
    }
}