var http = require(`http`)
var server = http.createServer(handleServer)
server.listen(5566, () => {
    console.log("server listening on port 5566")
})

function handleServer(req, res){
    console.log((req.url, req.method))
    res.setHeader("Content-Type", "text/html")
    res.end(`Your requested url is ${req.url} and method is ${req.method}`)
}