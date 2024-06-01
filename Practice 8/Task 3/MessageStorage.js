const Message = require("messageObject")
class MessageStorage {
    private static Login = "Ben"

    static getLogin(){
        return MessageStorage.Login
    }

    static changeLogin(login){
        try{
            if(typeof login === "string"){
                MessageStorage.Login = login
            }
            else{
                throw new TypeError("Wrong parameter`s type! (MessageStorage.js, 9)");
            }
        }
        catch(error){
            console.error(error)
        }
    }

    static storage = []

    updateMessages(){
        if(MessageStorage.storage.length === 0){
            console.log("No new messages")
            return
        }
        console.clear();
        let messages = []
        for(let i = MessageStorage.storage.length - 1; i >= 0; i--){
            if(messages.length >= 10){
                break
            }
            if(MessageStorage.storage[i].sender === MessageStorage.Login || MessageStorage.storage[i].receiver === MessageStorage.Login){
                messages.push(MessageStorage.storage[i]);
            }
        }
        for(let i = messages.length - 1; i >= 0; i--){
            console.log(MessageStorage.Login)
            console.log(messages[i].getTime.getHours() + " : " + messages[i].getTime.getMinutes() + "   " + messages[i].getMessage() + "   --->>" + messages[i].getReceiver());
            console.log("")
        }
    }

    clearStorage(){
        MessageStorage.storage.length = 0
    }

}
module.exports = MessageStorage;