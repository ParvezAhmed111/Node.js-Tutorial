const { ok } = require("assert");
const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res)=>{
    console.log(req.url);
    res.statusCode= 200;    //search http status code
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> This is Parvez</h1> <p>Hey this is the way to rock the world! </p>');
});

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);

});

// res.statusCode --> server code
// 200 for ok
// 500 for server error
// 404 for not found