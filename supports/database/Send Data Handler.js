//Stuff
const clr = require('chalk');

/* Import Model Database Yang udh di Buat */
const prefix = require('./models/Prefix');

class sendToDatabase {
    async setCustomPrefix(NewPrefix, GuildID, GuildName) {
        this.prefix = NewPrefix;
        this.guild = GuildID;
        this.guildName = GuildName;

        //Ubh jadi String
        const newPrefix = String(this.prefix);

        //Pastikan Prefix tidak lebih dari 4 karakter
        if (newPrefix.length > 4 && newPrefix.length < 0) return {
            Code: -5,
            Message: "Prefix Should Not More than 4 Character"
        }
        //Cek apakah GuildID ada di Dalam Database
        const savePrefix = await prefix.findById(this.guild);
        if (savePrefix) {
            console.log(clr.green(`Override Old Data with the New One!`));
            try {
                await prefix.updateOne({_id: this.guild}, {
                    _id: this.guild,
                    GuildName: this.guildName,
                    CustomPrefix: this.prefix,
                });
                return {
                    Code: 20,
                    Message: "Successfully Save New Prefix to Database!"
                }
            } catch (err) {
                return {
                    Code: -20,
                    Message: `Something went wrong while try to Save New Data!\n Error:${err}`
                }
            }
        } else {
            //Jika Ngak ada Data Maka Tambahkan Sebagai Prefix Baru
            try {
                await prefix.create({
                    _id: this.guild,
                    GuildName: this.guildName,
                    CustomPrefix: this.prefix
                });
                return {
                    Code: 20,
                    Message: "Successfully Save New Prefix to Database!"
                }
            } catch (err) {
                return {
                    Code: -20,
                    Message: `Something went wrong while try to Save New Data!\n Error:${err}`
                }
            }
        }
        /*
        //Cek apakah GuildID ada di Dalam Database
        prefix.findOne({_id: this.guild}, null, null,(err, data) => {
            if(err) return console.error(clr.red(`Cannot Find GuildData from Database!\n Error:${err}`));
            if(data) {
                console.log(clr.green(`Override Old Data with the New One!`));
                prefix.updateOne({_id: this.guild}, {
                    _id:this.guild,
                    GuildName: this.guildName,
                    CustomPrefix: this.prefix,
                }, {overwrite: true}, (err, data) => {
                    if(err) return {
                        Code: -20,
                        Message: `Something went wrong while try to Save New Data!\n Error:${err}`
                    }
                    if(data._id === this.guild) return {
                        Code: 20,
                        Message: "Successfully Overwrite Old data with the New Data!"
                    }
                });
            } else {
                //Jika Ngak ada Data Maka Tambahkan Sebagai Prefix Baru
                prefix.create({
                    _id: this.guild,
                    GuildName: this.guildName,
                    CustomPrefix: this.prefix
                }, (err, data) => {
                    if(err) return {
                        Code: -20,
                        Message: `Something went wrong while try to Save New Data!\n Error:${err}`
                    }
                    if(data._id === this.guild) return {
                        Code: 20,
                        Message: "Successfully Save New Data to Database!"
                    }
                });
            }
        });

         */
    }

    async deleteAllData(GuildID) {
        this.guild = GuildID;

        //Hapus Prefix Dari Database
        prefix.deleteOne({_id: this.guild}, (err) => {
            if (err) return console.error(clr.red(`Cannot Delete Prefix Data from Database!\n Error:${err}`));
        });
    }
}

module.exports = sendToDatabase;