var http = require(`http`);
var fs = require(`fs`)

let server = http.createServer(handleServer)

server.listen(555, () => {
    console.log("server is listening on port 555")
})

function handleServer(req, res) {
    console.log(req.method, req.url)
    if(req.method === `GET` && req.url === `/file`){
        res.setHeader(`Content-Type`, `html`)
        fs.readFile(`./node.html`, (err, data) => {
            if(err) console.log(err);
            res.end(data)
        })
    }
    if(req.method === `GET` && req.url === `/stream`){
        res.setHeader(`Content-Type`, `html`)
        fs.createReadStream(`./node.html`).pipe(res)
    }
}