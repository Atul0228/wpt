
function creatingserver1()
{

    const http =new require('http');
    if(http)
    {
        console.log("We are created a server");
    }
    
    const server =http.createServer(function(req,res){
        res.writeHead(200,{'contenttype':'text/plain'});
        res.end("Hello from Atul Server 1234567");
    });
    server.listen(5500);
}
creatingserver1()