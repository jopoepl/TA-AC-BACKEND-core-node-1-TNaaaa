let http = require(`http`)

let server = http.createServer(handleServer)

server.listen(4444, () => {
    console.log("server listneing on port 4444")
})

function handleServer(req, res){
    res.statusCode = 201;
    res.setHeader(`Content-Type`, `text/html`)
    res.write(`Hello Joel`)
    res.end(`<h2>Server is running Successfully<h2>`)

}