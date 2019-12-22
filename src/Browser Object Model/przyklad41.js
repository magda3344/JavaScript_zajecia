//app.js

const http=require('http');

let app=http.createServer((req,res)=>{ //tworzymy serwer
    res.writeHead(200,{'Content-Type':"text/plain",'Access-Control-Allow-Origin':"*"});

    res.end("Hello World!\n"); //zwracamy wartość
});

app.listen(3000, "127.0.0.1"); //ma działać na porcie i id
console.log('Node server running on port 3000');