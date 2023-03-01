//Operadores Aritmeticos

//Suma
let a = 3, b = 2;
let z = a + b;
console.log("Resultado de a + b:",z);

//Resta
z = a - b;
console.log("Resultado de a - b:",z);

//Multipliación
z = a * b;
console.log("Resultado de a * b:" + z);

//Division
z = a / b;
console.log("Resultado de a / b:", z);

//Modulo o residuo de la division
z = a % b;
console.log("Resultado de a % b:", z);

//Exponente
z = a ** b;
console.log("Resultado de a ** b:", z);

//Decremento
//Pre-Decremento (el operador -- antes de la variable)
z = --a;
console.log(a);
console.log("Resultado de pre-Decremento:", z);
//Post-Decremento (el operador -- despues de la variable)
z = b--;
console.log(b);
console.log("Resultado de Post-Decremento:", z);

//Incremento
//Pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log("Resultado de pre-incremento:", z);
//Post-incremento (el operador ++ despues de la variable)
z = b++;
console.log(b);
console.log("Resultado de Post-incremento:", z);

//PRECEDENCIA DE OPERADORES
let c = 1, d = 4;
a = 3, b = 2;
z = a * b + c;
console.log(z);

z = c + a * b;
console.log(z);

z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / c;
console.log(z);

//OPERADORES DE ASIGNACION
a = 1;
a += 3; // a = a + 3;
console.log(a);

a -= 2; // a = a - 2;
console.log(a);
/*
 * *= multiplicacion
 * /= division
 * %= modulo
 */

a *= 2;
console.log(a);
a /= 1;
console.log(a);
a %= 1;
console.log(a);


//OPERADORES DE COMPARACION
a = 3, b = 2, c = "3";

z = a == b; //se revisa el valor sin importan el tipo de dato
console.log(z);

z = a === c; //revisa si los valores sin iguales pero tambien los tipos
console.log(z);

z = a != c;
console.log(z);

z = a !== c;
console.log(z);

//OPERADORES RELACIONES
a = 3, b = 2, c = "3";
z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);

//OPERADORES LOGICOS
a = 5;
let min = 0, max = 10;

if( a >= min && a <= max ){
    console.log("Esta entre los valores");
}else{
    console.log("No esta entre los valores");
}

let vacaciones = false, diaDescanso = false;

if( vacaciones || diaDescanso ){
    console.log("Puedo ver el partido");
}else{
    console.log("No puedo ver el partido");
}

//OPERADOR TERNARIO
let resultado = (3 > 2) ? true : false;
console.log(resultado);

let numero = 110;
resultado = ( numero % 2 == 0) ? 'Es par' : 'Es impar';
console.log(resultado);