var http = require(`http`)
var server = http.createServer(handleServer)
server.listen(8000, () => {
    console.log("server listening on port 8000")
})

function handleServer(req, res){
    res.writeHead(202, {"Content-Type": "text/html"})
    res.end(`<h3>Welcome to altcampus</h3>`);
}