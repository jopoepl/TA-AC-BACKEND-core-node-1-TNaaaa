var http = require(`http`)
var server = http.createServer(handleServer)
server.listen(3333, () => {
    console.log("server listening on port 3333")
})

function handleServer(req, res){
    res.statusCode = 202
    res.end();
}