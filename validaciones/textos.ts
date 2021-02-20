namespace Validaciones {
    export const validarTexto = (texto:string):boolean =>{
        if(texto.length > 3){
            return true;
        }else{
            return false
        }
    
    }
    

    
}