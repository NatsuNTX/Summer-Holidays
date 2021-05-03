//Import Stuff
const mongoose = require('mongoose');
const clr = require('chalk')

function summerDatabase() {
    this.dbURI = process.env.DATABASE_URI

    //Konek Langsung ke Database
    mongoose.connect(this.dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
     }).then(console.log(clr.cyan(`Connected to Database`)));
}
module.exports = summerDatabase;