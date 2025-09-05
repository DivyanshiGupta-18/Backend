const fs = require("fs")

// console.log(fs)

console.log("starting")
// fs.writeFileSync("drift.txt","drift means to modify your code in your own way")

// This is an example of a "callback hell" pattern.
fs.writeFile("drift2.txt", "code drift means to modify your code in your own way", () => {
    console.log("done")
    // Read from the same file you wrote to
    fs.readFile("drift2.txt", (error, data) => {
        console.log(error, data.toString())
    })
})

fs.appendFile("drift.txt", "driftrobo", (e, d) => {
    console.log(d)
})
console.log("ending")