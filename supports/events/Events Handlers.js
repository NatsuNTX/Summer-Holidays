//Import Stuff
const {promisify} = require('util');
const ReadFolder = promisify(require('fs').readdir);
const clr = require('chalk');

//Ambil Kategori
const {EventsCategory} = require('./Events Category.json')

//Fungsi Asynchronous Jadi Proses yang ada di fungsi ini masih bisa jalan
//tanpa bikin bot freeze
async function EventHandler(Client) {
    this.summer = Client
    //Loop di setiap sub-Directory
    for (const subDir of EventsCategory) {
        const sDir = await ReadFolder(`./events/${subDir}/`).catch(err => console.log(clr.red(`Found Error While Opening Sub Directory\n Error:${err}`)));

        //Buat Loop Lagi untuk Mencari Event Files di dalam sub Directory
        for (const files of sDir) {
            //Jika Ada Files yang Berformat selain javascript, abaikan itu
            if (!files.endsWith(".js")) return;

            delete require.cache[files]

            //Import Properties dan Fungsi yang ada di dalam files Events
            const EventsProp = require(`../../events/${subDir}/${files}`);
            //Check apakah ada properties yang bernama "disable" dalam file events
            //berguna jika ingin mematikan event tersebut
            if (EventsProp.disabled) return;
            //Cari tipe di dalam files Events jika tidak ada properties tersebut
            //maka pake nama file nya
            const eventsType = EventsProp.event || files.split(".")[0] //Hasil ["Ready"]
            const emitters = (typeof EventsProp.emitter === 'string' ? this.summer[EventsProp.emitter] : EventsProp.emitter) || this.summer;
            //Check apakah Event harus di jalankan Sekali atau jika event tersebut ke trigger
            const isOnce = EventsProp.once

            //Try Catch Block (Jika ada Error Maka bot tidak akan Langsung berhenti atau Exit)
            try {
                console.log(clr.cyan(`Loading Events [${files.split(".")[0]}]`));
                emitters[isOnce ? 'once' : 'on'](eventsType, (...args) => EventsProp.run(...args));
            } catch (e) {
                console.error(clr.red(`Found Error While try to Run the Events\n Error:${e}`));
            }
        }
    }
}

//Make is Public
module.exports = EventHandler