"use strict";
var Validaciones;
(function (Validaciones) {
    Validaciones.validarTexto = function (texto) {
        if (texto.length > 3) {
            return true;
        }
        else {
            return false;
        }
    };
})(Validaciones || (Validaciones = {}));
