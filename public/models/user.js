/**
 * Created by m on 16-4-9.
 */
/**
 * Created by m on 16-4-9.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String},
    avatar: {type: String},
    register_at: {type: String},
    password: {type: String},
    email: {type: String}
});

module.exports = mongoose.model('User', UserSchema);
