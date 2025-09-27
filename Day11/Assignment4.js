function createserver()
{

    let a=process.argv[2];
    let httpRequest=new require('http');
    if(httpRequest)
    {
        console.log("Http request is accepted");
    }

    let serverMaking = httpRequest.createServer(function(req,resp){
        resp.end(a);
    })

    serverMaking.listen(8080);
}

createserver();