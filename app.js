var server = require("./server");

//
// Nodepot main start file
//

//
// Priorities for configfile
//
// 1. CommandLine
// 2. OpenShift location
// 3. Hardcoded location
//

var myArgs = process.argv;
var configNew = myArgs[2];

// get data directory for OpenShift (easy check, if we run in Openshift)
var openShiftDataDir = process.env.OPENSHIFT_DATA_DIR;

if (configNew != undefined) {
    console.log("Found optional path to config file " + configNew);
}
else if (openShiftDataDir != undefined)
{
    configNew = openShiftDataDir + "/config";
}
else
{
    configNew = '/etc/nodepot/config';
}


var config = require(configNew);

console.log("Starting nodepot with config from file " + configNew);
console.log("Starting Nodepot in " + config.mode  + " mode ");
console.log("Starting Nodepot listening on local port " + config.port);

server.start(configNew);


