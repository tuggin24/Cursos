//Funcion CallBack: Se usa para llamar una funcion dentro de otra funcion que se recibe como parametro de entrada.

function miFuncion1(){
    console.log('Funcion 1');
}
function miFuncion2(){
    console.log('Funcion 2');
}

miFuncion1();
miFuncion2();

//Funcion Callback
function imprimir( mensaje ){
    console.log( mensaje );
}

//Asi se usa la funcion callback
function sumar(p1, p2, funcionCallBack){
    let res = (p1 + p2);
    funcionCallBack(`Resultado: ${res}`);
}

//Asi se llama la funcion
sumar(1,2,imprimir);

/**
 * Sincrono: Si la funcion1 llama a la funcion2, la funcion1 tiene que esperar hasta que la funcion2 retorne algo para continuar su ejecución.
 * 
 * Asincro: Si la funcion1 llama a la funcion2, la funcion1 puede seguir ejecutandose mientras la funcion2 retorna algo.
 */
