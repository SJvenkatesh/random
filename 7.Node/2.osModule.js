// operating system module
const os=require('os')
console.log(os.arch()) //architecture (64 or 32)
console.log(os.platform())  //tells about system platform
console.log(os.networkInterfaces())  //gives details about network
console.log(os.cpus())  //cpu specification 



// ******************************************

console.log(os.release()); // release of the system
console.log(os.type()); // type of the system
console.log(os.uptime()); // uptime of the system
console.log(os.hostname()); // hostname of the system
console.log(os.userInfo()); // user info of the system
console.log(os.totalmem()); // total memory of the system
console.log(os.freemem()); // free memory of the system
console.log(os.homedir()); // home directory of the system
console.log(os.tmpdir()); // temporary directory of the system
console.log(os.endianness()); // endianness of the system
console.log(os.EOL); // end of line of the system
