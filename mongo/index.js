var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/Me');
mongoose.Promise = global.Promise;

var UsersSchema = mongoose.Schema({
  id : {type : String, unique: true, required : true},
  passwd : {type : String, required : true},
  name : {type : String, required : true},
  token : {type : String},
  friend_list : {type : String},
  isLogined : {type : Boolean, default : true}
});
Users = mongoose.model("users", UsersSchema);

exports.Users = Users;
