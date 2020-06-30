const http = require('http')

const server = http.createServer(function(req,res){
    //req === request
    //res === response
    res.writeHead(200, {'Content-Type': 'text/html'}) // send headers
    res.write('<h1>Hello World<h1>')
    res.end()
})

server.listen(8000) //localhost:8000