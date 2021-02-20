"use strict";
var Validaciones;
(function (Validaciones) {
    Validaciones.validarFecha = function (fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        else {
            return true;
        }
    };
})(Validaciones || (Validaciones = {}));
