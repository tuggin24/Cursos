let saludo = "Hola mundo desde TypeScript"
saludo = "cambios";
let numero:number;
numero = 10;

let cualquiera: any;
cualquiera = "cadena";
cualquiera = 12;

const PI_NUMBER = 3.1416;


function saludar(){
    console.log(saludo+numero);
    console.log("PI->",PI_NUMBER);
}

saludar();