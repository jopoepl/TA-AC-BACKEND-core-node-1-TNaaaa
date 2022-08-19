let fs = require (`fs`)

fs.readFile(`./demo.md`, (err, content) => {
    console.log(content.toString())
})

console.time("for loop - done")
for(i =0; i<= 1000; i++){
    
}
console.timeEnd("for loop - done")

console.time("set timeout - done")
setTimeout(()=> {
    console.timeEnd("set timeout - done")
},2000)

let buff1 = Buffer.alloc(10)
console.log(buff1)

buff1.write("Welcome to Buffer")

console.log(buff1.toString())
