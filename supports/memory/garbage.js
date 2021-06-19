/**
 * Memory Garbage V1.0 [BETA]
 * Dev:NatsuX
 */
//Import Stuff
const memtrace = require('mtrace');
const process = require("process");
const clr = require("chalk");

async function startTrace() {
    if(process.platform === "linux") {
        const fileLog = memtrace.mtrace();
        if (fileLog) {
            console.log("Tracing for Memory Leak!");
        }
    } else if(process.platform === "win32") {
        const memoryInfo = process.memoryUsage();
        if(memoryInfo.rss > 225443840) {
            console.log(clr.yellow("Memory Leak!, Cleaning Memory"));
            try {
                await global.gc();
            } catch (e) {
                console.log(clr.red("Cannot Run Memory Cleaner, Make Sure You Run Nodejs with --expose-gc Flag!"));
            }
        }
    }
}
module.exports = startTrace