var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
    name: String,
    age: {type: Number},
    email: {type: String },
    img: { data: Buffer, contentType: String }
    // phone: {type: Number},
    // address: {type: String},
    // gender: {type: String, enum: ['Male', 'Female'] }
    
}); 

module.exports = mongoose.model('user', userSchema, 'users');