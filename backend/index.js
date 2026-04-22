const http = require("http");

let server = http.createServer((req, res) => {
    if(req.method == "GET") {
        res.end("Server responding on port 3000");
        
    }
})

server.listen(3000);
