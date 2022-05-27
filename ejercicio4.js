/* function edadperro(edad){
    return edad *7;
} */
const prompt = require("prompt-sync")({ sigint: true });
let edadperro = edad => edad * 7
edadingresada= prompt("Ingrese edad que quiera pasar a edad perro")
console.log(edadperro(edadingresada));