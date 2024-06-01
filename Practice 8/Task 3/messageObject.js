const storage = require('MessageStorage')
class Message {
    private receiver
    private sender
    private message
    private time

    constructor(message, receiver) {
        this.message = message;
        this.receiver = receiver;
        this.time = new Date();
        this.sender = storage.Login;
    }

    getMessage() {
        return this.message;
    }

    getReceiver() {
        return this.receiver;
    }

    getTime() {
        return this.time;
    }
}
module.exports = Message;