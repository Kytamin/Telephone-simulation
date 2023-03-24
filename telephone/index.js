class Mobile {
    constructor(name) {
        this.name = name;
        this.battery = 100;
        this.status = false;
        this.message = '';
        this.inbox = [];
        this.outbox = [];
    }

    checkStatus() {
        this.decreaseBattery();
        return this.status;
    }

    writeMessage(text) {
        if (this.status) {
            this.decreaseBattery();
            this.message = text;
        }
    }

    turnOn() {
        this.decreaseBattery();
        this.status = true;
    }

    turnOff() {
        this.status =false;
    }
    decreaseBattery() {
        if (this.battery > 0) {
            this.battery --;
        } else {
            this.turnOff();
        }
    }
    changeBattery() {
        this.battery += 5;
    }



    sendMessage(phone) {
        this.decreaseBattery();
        this.outbox.push(this.name + ":" + this.message + "time:" + Date());
        phone.inbox.push(this.name + ":" + this.message + "time:" + Date());
    }

    getInbox() {
        this.decreaseBattery();
        return this.inbox;
    }

    getOutbox() {
        this.decreaseBattery();
        return this.outbox;
    }
}
