var crypto = require('crypto');
var group_socket = require('../server');

exports.create_group = (req, res) =>  {
    //Randomly generated 5 bytes. Encoded in base64.
    var uid = crypto.randomBytes(5).toString('base64');
    res.send(JSON.stringify({uid : uid}));
}

exports.join_group = (req,res) => {
    
}