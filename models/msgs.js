var mongoose = require('mongoose');

var msgsSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String
});


// Our team model
var Msg = mongoose.model('message', msgsSchema);

// Make team model available through exports/require
module.exports = Msg;