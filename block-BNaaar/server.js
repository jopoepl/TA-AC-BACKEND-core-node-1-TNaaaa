var http = require(`http`)
var url = require(`url`)


let server = http.createServer(handleServer)

server.listen(5000, () => {
    console.log("server listening on port 5000")
})

function handleServer(req, res){
    let parsedURL = url.parse(req.url)
    let pathname = parsedURL.pathname
    console.log(req.method, pathname)
    if(req.method === `GET` && pathname === `/`){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(`Welcome to homepage`)
        res.end();
    } else if(req.method === `GET` && pathname === `/about`){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(`<h2>THis is all about NodeJS</h2>`)
        res.end();
    } else if(req.method === `POST` && pathname === `/about`){
        res.writeHead(200, {"Content-Type": "json"})
        res.write(`{message: this is a post request}`)
        res.end();
}
}