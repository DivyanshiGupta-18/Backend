import fs from "fs/promises"

let a = await fs.readFile("div.txt")

let b = await fs.writeFile("div.txt", "\n\n\n\n\n this is amazing promise")

console.log(a.toString())