const prompt = require("prompt-sync")({ sigint: true });


a=prompt("Ingrese funcion que quiere hacer");

switch(a){
    case 'sumar':
        b=parseInt(prompt("Ingrese primer numero"));
        c=parseInt(prompt("Ingrese segundo numero"));
        console.log(b + c);
        break;
    case 'restar':
        b=parseInt(prompt("Ingrese primer numero"));
        c=parseInt(prompt("Ingrese segundo numero"));
        console.log(b - c);
        break;
    case 'multiplicar':
        b=parseInt(prompt("Ingrese primer numero"));
        c=parseInt(prompt("Ingrese segundo numero"));
        console.log(b * c);
                
}





