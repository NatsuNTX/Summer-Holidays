module.exports = {
    name: "hello",
    shortName: ["hi"],
    disable: false,
    description: "Send A Feedback",
    categories: "testing",
    execute(msg) {
        msg.channel.send(`${msg.author} HI!`)
    }
}