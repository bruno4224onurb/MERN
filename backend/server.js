import http from 'http'

//creating server to accept requests and responses
http.createServer( (req, res) => {
//res.writeHead(status code, 'status message', {Headers})
    res.writeHead(400, 'Bad request', {"Content-type":"text/html"})

    res.write(req.url)

// if the request is post write post request
    if (req.method === "POST") {
        res.write('Post Request')
    }

    res.end()
//must end the response

}).listen(4000, 'localhost')