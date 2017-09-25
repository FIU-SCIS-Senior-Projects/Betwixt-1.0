
var crypto = require('crypto');

exports.create_group = function(req, res)  {
    //Randomly generated 5 bytes. Encoded in base64.
    var token = crypto.randomBytes(5).toString('base64');
    res.send(token);
}