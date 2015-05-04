var redis = require("redis");


function initClient() {

    var openShiftIP = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
    if (openShiftIP != undefined) {
        console.log("Starting DB client with ip/port server " + process.env.OPENSHIFT_REDIS_PORT + " : " + process.env.OPENSHIFT_REDIS_HOST + " on openshift");

        var client = redis.createClient(process.env.OPENSHIFT_REDIS_PORT, process.env.OPENSHIFT_REDIS_HOST);
        client.auth(process.env.REDIS_PASSWORD);
        return client;

    }
    else {
        console.log("Starting DB without special parameters outside of OpenShift environment ...");
        var client = redis.createClient();
        return client;
    }

}

module.exports = client;
exports.initClient = initClient;

