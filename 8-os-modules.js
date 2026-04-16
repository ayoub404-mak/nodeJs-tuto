const  os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in secondes
console.log(`the systeme is  ${os.uptime()} seconde`)

const currentOS = {
    name:os.type(),
    releas :os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)