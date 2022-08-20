var http = require(`http`)
var server = http.createServer(handleServer)
server.listen(7000, () => {
    console.log("server listening on port 7000")
})

function handleServer(req, res){

    res.end(JSON.stringify(req.headers))
}