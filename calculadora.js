'use strict'

var args = process.argv.slice(2)

var operando1 = parseFloat(args[0])
var operando2 = parseFloat(args[2])

var operador = args[1]

var resultado = "Resultado: "

if (args.length == 3){
    switch(operador){
        case "+":
        resultado += parseFloat(operando1+operando2)
        break;
        case "-":
        resultado += parseFloat(operando1-operando2)
        break;
        case "/":
        resultado += parseFloat(operando1/operando2)
        break;
        case "*":
        resultado += parseFloat(operando1*operando2)
        break;
    }
}

console.log(resultado)