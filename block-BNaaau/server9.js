var http = require(`http`)
var server = http.createServer(handleServer)
server.listen(8888, () => {
    console.log("server listening on port 8888")
})

function handleServer(req, res){
    res.writeHead(202, {"Content-Type": "application/json"})
    res.end({success: true, message: 'Welcome to Nodejs'});
}