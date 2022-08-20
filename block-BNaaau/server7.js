var http = require(`http`)
var server = http.createServer(handleServer)
server.listen(8000, () => {
    console.log("server listening on port 8000")
})

function handleServer(req, res){
    res.setHeader(`Content-Type`, `text/html`)
    res.write(`<h3>Welcome to altcampus</h3>`)
    res.end();
}