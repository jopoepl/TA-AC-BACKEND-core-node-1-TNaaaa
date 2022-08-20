let http = require(`http`)
let url = require(`url`)
let fs = require(`fs`)

let server = http.createServer(handleServer)

server.listen(8000, () => {
    console.log(`Server listening on port 8000`)
})

function handleServer(req, res){
    console.log(req.url)
    if(req.method === `GET` && req.url === `/`) {
        res.setHeader(`Content-Type`, `text/html`)
        fs.createReadStream(`./index.html`).pipe(res)
    }
    if(req.url.split('.').pop() === 'css') {
        // set header for css file
        res.setHeader('Content-Type', 'text/css');
        // read css file and send it in response
        fs.readFile('./assets/stylesheets/' + req.url, (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }
}