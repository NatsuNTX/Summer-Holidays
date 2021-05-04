module.exports = {
    name: 'play',
    //shortname: [""],
    disable: false,
    description: "Play Music For You!",
    categories: "music",
    async execute(msg, args) {
        const keyWord = args.join(" ");
        await msg.client.pControls.PlayMusic(keyWord, msg);
    }
}