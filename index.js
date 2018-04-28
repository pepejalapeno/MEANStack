'use strict'

var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json())

app.get('/api/:parametro?', function(req, res){

    var parametro1 = "SIN PARÁMETRO"

    if(req.param.parametro){
        parametro1 = req.param.parametro
    }

    var args = process.argv.slice(2)
    
    var operando1 = parseFloat(args[0])
    var operando2 = parseFloat(args[2])

    var operador = args[1]

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

    res.status(200).send({
        arreglo: [{ Operando_1: 1}, { Operador: 2 }, { Operando_2: 2 }],
        ejemplo: "Resultado: " + parametro1
    }) 
});

app.listen(7070, function(){
    console.log('¿Qué está pasando?')
});