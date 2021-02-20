namespace Validaciones {

    
    export const validarFecha = (fecha:Date):boolean =>{
        if (isNaN(fecha.valueOf())){
            return false;
        }else{
            return true;
        }
    }
    
}