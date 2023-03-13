//Funcion normal
let miFuncion = function(){
    console.log( 'Saludos desde mi funcion' );
}

//Funcion flecha
const funcionFlecha = (dato) => {
    console.log( 'Saludos desde mi funcion flecha' + dato);
}

//Funcion flecha2
const funcionFlecha2 = dato => console.log( 'Saludos desde mi funcion flecha 2 ' + dato);

//Funcion flecha3
const funcionFlecha3 = () =>{ 
    return 'Saludos desde mi funcion flecha 3 ';
}

//Funcion flecha4
const funcionFlecha4 = () => 'Saludos desde mi funcion flecha 4 ';

//Funcion flecha5
const regresaObjeto = () => ({nombre:'Juan',apellido:'Perez'});

//Funcion flecha5
const regresaObjeto2 = () => {
    return {nombre:'Juan',apellido:'Perez'};
}

//Funcion flecha6
const funcionParametros = (p1,p2) => p1 + p2;


miFuncion();
funcionFlecha('Flecha');//No sirve el hoisting por tanto toca llamarlo desde de crearlo
funcionFlecha2('Flecha2');
console.log(funcionFlecha3());
console.log(funcionFlecha4());
console.log(regresaObjeto());
console.log(regresaObjeto2());
console.log(funcionParametros(1,4));