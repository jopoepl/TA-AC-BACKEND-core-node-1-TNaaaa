var http = require(`http`)
var server = http.createServer(handleServer)
server.listen(5000, () => {
    console.log("server listening on port 5000")
})

function handleServer(req, res){
    console.log(req, res)
}