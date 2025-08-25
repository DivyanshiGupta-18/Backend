const { error } = require("console")
const fs = require("fs")

console.log("starting")
// fs.writeFileSync("div.txt" , "div is a good girl")

fs.writeFileSync("div2.txt" , "div is a good girl 2", () => {
    console.log("done")
    fs.readFile("div2.txt", (error, data) => {
        console.log(error , data.toString())
    })
})

fs.appendFile("div.txt" , "divvcode" , (e , d) => {
    console.log(d)
})
console.log("ending")