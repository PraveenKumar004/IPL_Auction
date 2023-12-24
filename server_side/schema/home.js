const mongoose =require('mongoose')

const manager = new mongoose.Schema({
    nam : String,
    password : String,
    amount: String,

    
});
const m_login = mongoose.model('manger_signup',manager);

module.exports = m_login;