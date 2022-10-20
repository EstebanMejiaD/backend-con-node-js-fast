const { match } = require("assert")
const http = require("http")

const server = http.createServer((req, res)=> {
    if (req.url === "/") {
        res.write("Welcome to the server")
        return res.end()
    }

    if (req.url === "/about") {

        //task
        // for (let index = 0; index < 1000; index++) {

        //     console.log(Math.random()*index)
        // }
        return  res.end("about page")
    }

    res.end("Not Found");

})


server.listen(3000)