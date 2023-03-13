'use strict';
try{
    let x = 10;
    miFuncion();
}catch(error){
    console.log( 'Error: ' + error );
}finally{//Se ejecuta exista o no error
    console.log( 'Termina revisión de errores' )    
}
console.log( 'Continuamos...' )