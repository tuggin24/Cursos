/**
 * Sincrono: Si la funcion1 llama a la funcion2, la funcion1 tiene que esperar hasta que la funcion2 retorne algo para continuar su ejecución.
 * 
 * Asincro: Si la funcion1 llama a la funcion2, la funcion1 puede seguir ejecutandose mientras la funcion2 retorna algo.
 */

//SetInterval: Llama a la funcion despues de cada cierto tiempo

let relog = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()}`);
}

setInterval(relog,1000);//llama cada 1 segundos