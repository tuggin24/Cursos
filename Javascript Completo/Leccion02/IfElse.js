let condicion = true;

if(condicion){
    console.log("Es Verdadero");
}else{
    console.log("Es falso");
}

let numero = 42;

if(numero == 1){
    console.log("Numero 1");
}else if(numero == 2){
    console.log("Numero 2");
}else if(numero == 3){
    console.log("Numero 3");
}else if(numero == 4){
    console.log("Numero 3");
}else{
    console.log("No existe.");
}

let mes = 11;
let estacion;

if(mes == 12 || mes == 1 || mes == 2){
    estacion = 'Invierno';
}else if(mes == 3 || mes == 4 || mes == 5){
    estacion = 'Primavera';
}else if(mes == 6 || mes == 7 || mes == 8){
    estacion = 'Verano';
}else if(mes == 9 || mes == 10 || mes == 11){
    estacion = 'Otoño';
}else{
    estacion = "valor incorrecto";
}
console.log(estacion);
/**
 * 6am - 11am - Buenos días
 * 12pm - 18pm - Buenas tardes
 * 19pm - 24pm - Buenas Noches
 * 0am - 6am - Durmiendo
 */

let hora = "6";
let modo = "pm";
if(hora >= 6 && hora <= 11 && modo == 'am'){
    console.log("Buenos días");
}else if(hora >= 12 && hora <= 18 && modo == 'pm'){
    console.log("Buenas tardes");
}else if(hora >= 19 && hora <= 24 && modo == 'pm'){
    console.log("Buenas Noches");
}else if(hora >= 0 && hora <= 6 && modo == 'am'){
    console.log("Durmiendo");
}