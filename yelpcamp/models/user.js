const mongooose=require('mongoose');
const Schema=mongooose.Schema;
const passportLocalMongoose=require('passport-local-mongoose');

const UserSchema=Schema({
    email: {
        type: String,
        unique: true,
        required:true
    }
});
UserSchema.plugin(passportLocalMongoose);
module.exports=mongooose.model('User',UserSchema);