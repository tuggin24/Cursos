'use strict';
let resultado;
let x = -1;
try{
    //throw: Se usa para crear nuestros propios errores o exepciones
    if ( isNaN(x) ) throw 'No es un número'; 
    else if ( x === '' ) throw 'Es cadena vacía';
    else if ( x >= 0 ) throw 'Valor positivo';
    else if ( x < 0 ) throw 'Valor negativo';
}catch(error){
    console.log( 'Error: ' + error );
    console.log( 'Error: ' + error.name );
    console.log( 'Error: ' + error.message );
}
