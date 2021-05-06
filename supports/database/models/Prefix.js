//Stuff
const {Schema, model} = require('mongoose');

//Buat Rancangan terlebih Dahulu
const prefixSchema = Schema({
    _id: String,
    GuildName: String,
    CustomPrefix: String
});
module.exports = model("Prefix", prefixSchema);