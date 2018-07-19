let AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    

    console.log("User test for vcs state in git commit");
    callback(null,'Successfully executed');
}