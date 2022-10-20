

function add(x, y) {
    return x+y;
}

function subtract(x, y) {
    return x-y;
}

function multiply(x, y) {
    return x*y;
}

function divide(x, y) {
   if (y === 0) {
    console.log("No se puede dividir entre 0")

   } else {
    return x / y
   }
}


module.exports = {
    add,
    subtract,
    multiply,
    divide
}
