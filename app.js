"use strict";
///<reference path = 'validaciones/textos.ts'/>
///<reference path = 'validaciones/fechas.ts'/>
console.log(Validaciones.validarTexto('hola'));
var hoy = new Date();
console.log(Validaciones.validarFecha(hoy));
