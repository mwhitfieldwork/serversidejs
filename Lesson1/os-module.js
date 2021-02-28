var os = require("os");

console.log("Os Type: " + os.type);
console.log("totalmem" + os.totalmem());
console.log("free mem" + os.freemem());
console.log("user info" + os.userInfo().username);