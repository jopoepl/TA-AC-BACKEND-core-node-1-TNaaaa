var http = require(`http`)
var server = http.createServer(handleServer)
server.listen(5100, () => {
    console.log("server listening on port 5100")
})

function handleServer(req, res){
    res.setHeader("Content-Type", "text/html")
    res.end("'My first server in NodeJS'")
}