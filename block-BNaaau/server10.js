var http = require(`http`)
var server = http.createServer(handleServer)
server.listen(5050, () => {
    console.log("server listening on port 5050")
})

function handleServer(req, res){
    console.log(req.method)
    res.writeHead(202, {"Content-Type": "text/html"})
    if(req.method === `POST`){
    res.end(`<h2>posted for first time</h2>`);
    } else {
        res.end(`Waiting for a POST request`)
    }
}
