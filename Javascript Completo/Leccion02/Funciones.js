//Llamamos a la funcion
miFuncion(1,4);

//Declaracion de la funcion
function miFuncion(a,b){
    console.log("Suma:",(a+b));
}

//Llamamos a la funcion
miFuncion(2,2);

//Utilizamos el return
function miFuncion2(a,b){
    return (a+b);
}

let datareturn = miFuncion2(2,3);
console.log(datareturn);

//Funciones de tipo Expresión
let sumar = function(a,b){return (a+b)};
let operacion = sumar(1,3);
console.log(operacion);

//Funciones de tipo Self-Invoking
//Esta funcion no se puede reutilizar, es una funcion que se manda a llamar a si misma.
(function (a,b){
    console.log("Ejecutando la funcion", (a+b));
})(1,3);

//Funciones como Objetos
function miFuncion3(a,b){
    console.log(arguments.length);
    return (a+b);
}
console.log(typeof(miFuncion3));

let miFuncionTexto = miFuncion3.toString();
console.log(miFuncionTexto);

//Funciones Flecha
const sumarFuncionFlecha = (a,b) => (a+b);

let sumaTipoFlecha = sumarFuncionFlecha(2,2);
console.log(sumaTipoFlecha);


//Argumento y parametros
//Los argumentos son las variables que se envian a la funcion
//Los parametros son las variables que se declaran en la funcion
let sumar1 = function(a, b = 2){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b;
}
let resultado = sumar1(4,4,5);
let resultado2 = sumar1(4);
console.log(resultado);
console.log(resultado2);


//Sumar todos los argumentos
resultado = sumarTodo(5, 4, 13, 10, 9, 10, 20, 13, 16);
console.log(resultado);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}

//Paso por valor y paso por referencia
//Paso por valor es cuando utilizamos tipos que no son objetos

//Paso por valor
//Tipo primitivos no tienen ni atributos o metodos
let x = 10;

function cambiarValor(a){
    a = 20;
}

cambiarValor(x);//10
console.log(x);

//Paso por referencia
const persona = {
    nombre : 'Agustin',
    apellido : 'Salazar'
};

function cambiarValorObjeto(p1){
    p1.nombre = 'Andres';
    p1.apellido = 'Galavis';
}

console.log(persona);
cambiarValorObjeto(persona);
console.log(persona);
