/**
 * Memory Garbage V1.0 [BETA]
 * Dev:NatsuX
 */
//Import Stuff
const clr = require("chalk");

function startTrace() {
        SceduleGC();

        function SceduleGC() {
            let randomTime = Math.random() * 15 + 20
            setTimeout(() => {
                try{
                    global.gc()
                    SceduleGC();
                } catch (e) {
                    console.log(clr.red("Cannot Run Garbage Collection!,Make Sure You Run NodeJS With --expose-gc Flags!"));
                }
            }, randomTime * 60 * 1000);
        }
}
module.exports = startTrace