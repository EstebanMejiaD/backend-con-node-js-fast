const EventEmitter = require("events")

const custonEmitter = new EventEmitter()


custonEmitter.on("response", (data, secondData)=> {
    console.log("received")
    console.log(data) 
    console.log(secondData)
    
})


custonEmitter.emit("response", "hello world", [1,2,3])
