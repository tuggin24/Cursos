//Number: convierte String a numero

let miNumero = "20";

console.log(miNumero);
console.log(typeof(miNumero));

let edad = Number(miNumero);
console.log(edad);
console.log(typeof(edad));

if( edad >= 18){
    console.log("Puede votar");
}else{
    console.log("No puede votar");
}

edad <= 18 ? console.log("Puede votar") : console.log("No puede votar");

//IsNaN verifica si el valor es un numero
let miValor = "16z";

console.log(miValor);
console.log(typeof(miValor));

let edad2 = Number(miValor);
console.log(edad2);
console.log(typeof(edad2));

if(isNaN(edad2)){
    console.log("No es un numero");
}else{
    if( edad2 >= 18){
        console.log("Puede votar");
    }else{
        console.log("No puede votar");
    }
}

