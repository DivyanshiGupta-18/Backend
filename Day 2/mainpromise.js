import fs from "fs/promises"

let a = await fs.readFile("drift.txt")

let b = await fs.appendFile("drift.txt", 
    "\n\n\n\n this is amazing promise")
console.log(a.toString(), b)