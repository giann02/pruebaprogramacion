const prompt = require("prompt-sync")({ sigint: true });
let convertir = palabra => "http://www." + palabra + ".com";

let palabra = prompt("Ingrese palabra que va a convertirse en URL")
console.log(convertir(palabra));
