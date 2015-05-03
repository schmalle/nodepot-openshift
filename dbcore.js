var redis = require("redis");

var client = undefined;

var openShiftIP = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
if (openShiftIP != undefined) {
    console.log("Starting DB client with ip/port server " + process.env.OPENSHIFT_REDIS_PORT + " : " + process.env.OPENSHIFT_REDIS_HOST + " on openshift");
    client = redis.createClient(process.env.OPENSHIFT_REDIS_PORT, process.env.OPENSHIFT_REDIS_HOST);
    client.auth(process.env.REDIS_PASSWORD);

}
else {
    console.log("Starting DB without special parameters outside of OpenShift environment ...");
    client = redis.createClient();
}


module.exports = client;

