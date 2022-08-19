let http = require(`http`)


let server = http.createServer(handleServer)

server.listen(3000, () => {
    console.log(`server listening at port 3000`)
})

function handleServer(req, res){
    console.log(req.headers, req.url, req.method)

    res.end("welcome")
}
