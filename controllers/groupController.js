var crypto = require('crypto');
var group_socket = require('../server');

exports.create_group = (req, res) => {
  //Randomly generated 5 bytes. Encoded in base64.
  var uid = crypto.randomBytes(4).toString('hex');
  res.send(JSON.stringify({ uid }));
};

exports.join_group = (req, res) => {};
