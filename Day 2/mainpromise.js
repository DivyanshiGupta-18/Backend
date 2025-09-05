import fs from "fs/promises"

let a = await fs.readFile("drift.txt")

let b = await fs.writeFile("drift.txt",
    "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)