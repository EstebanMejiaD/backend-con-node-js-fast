const path = require("path")
 
const filePath =  console.log(path.join("public", "dist", "/style", "main.css"));

console.log(path.basename(filePath))
console.log(path.dirname(filePath))
console.log(path.resolve("dist"))
console.log(path.parse(filePath))