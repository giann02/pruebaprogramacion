let sumar = (a,b) => a+b

let restar = (a,b) => a-b

let multiplicar = (a,b) => a*b

let dividir = (a,b) => a/b

console.log("---------- Testeo de operaciones / Calculadora-----------")

console.log(sumar(10,5))

console.log(restar(10,5))

console.log(multiplicar(10,5))

console.log(dividir(10,0))

let cuadradoDeUnNumero = x => multiplicar(x,x)

let promedioTresNumeros = (a,b,c) => dividir(sumar(sumar(a, b), c), 3)


let calcularPorcentaje = (a,b) => dividir(multiplicar(a,b),100)

let generadorDePorcentaje = (a,b) => 

console.log(calcularPorcentaje(300,15))