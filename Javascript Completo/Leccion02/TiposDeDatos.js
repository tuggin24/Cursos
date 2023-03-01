/**
 * Ejemplos de tipos de datos
 */
//Tipo de dato string
var nombre = "Agustin";
console.log("Nombre:",nombre);

nombre = 10.5;
console.log("Nombre:",typeof(nombre));

//Tipo de dato numerico
var numero = 21;
console.log("Numero:",numero);

//Tipo de dato Objeto
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    edad : 12
}
// El typeof muestra el tipo de dato
console.log("Objeto:",typeof(objeto));
console.log("Objeto:",objeto);

//Tipo de dato boolean (true, false)
var bandera = true;
console.log("Bandera:",typeof(bandera));
console.log("Bandera:",bandera);

//Tipo de dato function
function miFuncion(){}
console.log("Funcion:",typeof(miFuncion));
console.log("Funcion:",miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("Mi simbolo");
console.log("Simbolo:",typeof(simbolo));
//console.log("Simbolo",simbolo);

//Tipo clase es una funcion
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log("Clase:",typeof(Persona));
console.log("Clase:",Persona);

//Tipo de datos undefined
var x;
console.log(typeof(x));
console.log(x);

x = undefined;
console.log(x);

//Tipo de dato null = ausencia de valor
var y = null;
console.log(typeof(y));
console.log(y);

//Tipo de dato array
var autos = ["ford",'auidi',"BMW"];
console.log(typeof(autos));
console.log(autos);

//Tipo de dato vacio
var z = '';
console.log(typeof(z));
console.log(z);