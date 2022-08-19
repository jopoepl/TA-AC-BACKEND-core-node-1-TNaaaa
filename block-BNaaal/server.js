let http = require("http")

let server = http.createServer(handleServer)

server.listen(4000, "localhost", () => {
    console.log("Server is listening on port 4000")
})

function handleServer(req, res){
    res.end("welcome")
}