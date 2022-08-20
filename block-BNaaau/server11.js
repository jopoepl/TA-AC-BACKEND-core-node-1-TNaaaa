var http = require(`http`)
var server = http.createServer(handleServer)
server.listen(2345, () => {
    console.log("server listening on port 23345")
})

function handleServer(req, res){
    console.log(req.method)
    res.setHeader("Content-Type", "text/html")
    if(req.method === `GET` && req.url === `/`){
    res.end(`Hello Joel`);
    } else if(req.method === `GET` && req.url === `/about`){
        res.end(`<h2>Joel</>`)
    } else if(req.method === `GET` && req.url === `/users`){
        res.end(`
        <input type="text" placeholder="Your Name">
        <input type="email" placeholder="Your Email">
        `)
    } else if(req.method === `POST` && req.url === `/users`){
        res.end(`
        Posted for the second time
        `)
    }else {
        res.statusCode = 404;
        res.end(`ERROR 404`)
    }
}