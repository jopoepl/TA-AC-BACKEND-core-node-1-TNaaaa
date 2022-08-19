//Q1

console.log(`Welcome to Nodejs`)

//Q2

let os = require(`os`)

let cpus = os.cpus().length

let freeMem = os.freemem()

let uptime = os.uptime();

let version = os.version();


console.log(cpus, freeMem, uptime, version)


//Q3
/* Answers are in the respective app and area js files*/

// Q4

let buff1 = Buffer.alloc(12)
let buff2 = Buffer.allocUnsafe(12)
buff1.write("Hey Joel")

let str = buff1.toString()
console.log(str)

// Q5
// Blocking code Example below
console.time("Loop blocked the main thread")
for(let i = 0; i<100; i++){
    
}
console.timeEnd("Loop blocked the main thread")

// Non blocking code
setTimeout(()=> console.log("I didnt block the main thread- settimeout"), 2000)

