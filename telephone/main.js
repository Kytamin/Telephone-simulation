let samsung =new Mobile("samsung");
let iphone =new Mobile("iphone");

samsung.turnOn()
iphone.turnOn()
samsung.writeMessage("hello bro")
samsung.sendMessage(iphone)
console.log(iphone.getInbox())
