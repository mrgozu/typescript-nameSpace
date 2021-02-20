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
console.log(Validaciones.validarTexto('hola'));
var hoy = new Date();
console.log(Validaciones.validarFecha(hoy));
