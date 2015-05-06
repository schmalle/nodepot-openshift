function start(configName) {

    config = require(configName);

    function onRequest(request, response) {


        /* set the correct content type */
        response.writeHead(200, {"Content-Type": "text/html"});

        response.end();
    }

    http.createServer(onRequest).listen(61080);

}

