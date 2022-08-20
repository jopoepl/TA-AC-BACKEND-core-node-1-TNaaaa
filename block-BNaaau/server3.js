var http = require(`http`)
var server = http.createServer(handleServer)
server.listen(5555, () => {
    console.log("server listening on port 5555")
})

function handleServer(req, res){
    console.log((req.headers))
    res.end(req.headers[`user-agent`])
}