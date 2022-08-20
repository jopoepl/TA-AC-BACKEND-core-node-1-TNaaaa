var http = require(`http`)
var url = require(`url`)

var server = http.createServer(handleServer)
server.listen(9999, () => {
    console.log("server listening on port 9999")
})

function handleServer(req, res){
    let parsedURL = url.parse(req.url, true)
    let pathName = parsedURL.pathname
    console.log(`Parsed URL : ${pathName}, URL : ${req.url}`)
    res.writeHead(202, {"Content-Type": "application/json"})
    res.end(JSON.stringify(parsedURL.query));
}