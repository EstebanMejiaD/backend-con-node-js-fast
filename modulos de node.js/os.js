const os = require("os")

console.log(os.freemem())

console.table({
    os: os.platform(),
    version: os.version(),
    totalMemory: os.totalmem()
})

