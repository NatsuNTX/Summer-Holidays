const cmdFetch = require('../../supports/commands Fetch/help Fetch');

module.exports = {
    name: 'help',
    //shortname: [""],
    disable: false,
    description: "Show Every Commands that Summer Can Do",
    categories: "utility",
    async execute(msg) {
        await cmdFetch(msg, msg.client.collection);
    }
}