





//promise antigua sintaxis
// getText("./data/tercero.txt")
//     .then((result) => console.log(result))
//     .then(()=>getText("./data/first.txt"))
//     .then((result)=>console.log(result))
//     .catch((error)=> console.log(error))



const { readFile } = require("fs/promises");

// promise sintaxis moderna async/await
async function read() {
  try {
      const result = await readFile("./data/first.txt","utf-8");
      const result2 = await readFile("./data/second.txt","utf-8");
      const result3 = await readFile("./data/tercero.txt","utf-8");
      const result4 = await readFile("./data/cuarto.txt","utf-8");
    console.log(result);
    console.log(result2);  
    console.log(result3);
    console.log(result4);
  } catch (error) {
    console.log(error);
  }
}

read();
