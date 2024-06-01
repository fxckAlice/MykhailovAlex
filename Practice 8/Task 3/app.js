const event = require('messageEvEmitter')
const account = require('MessageStorage')
const messageObj = require('./messageObject')
const storage = new account()
const ev = new event()

function send(message, receiver){
    ev.emit('send', new messageObj(message, receiver))
}

function update(){
    storage.updateMessages()
}

function getInfo(){
    console.log(account.getLogin())
}

function changeAccount(login){
    account.changeLogin(login)
}