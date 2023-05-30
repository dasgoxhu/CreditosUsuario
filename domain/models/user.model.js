const mongoose = require('mongoose')
const Schema = mongoose.Schema
const actualizar = mongoose.model;
//esquema de bd
const UserSchema = Schema({
    credirld: {
        type: String,
        require: true,
        lowercase: true,
    },
    userName: {
        type: String,
        require: true,
        lowercase: true,
    },
    userDocument: {
        type: String,
        require: true,
        lowercase: true,
    },
    wage: Number,  
    monts: Number,
    amountPaid: Number,
    state: String,   
}, 
{
    timestamps: true
});

//Modelo node
const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel