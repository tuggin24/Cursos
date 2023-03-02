let x = 10;
x.toString();
console.log(x);

let persona = {
    nombre      :   'Juan',
    apellido    :   'Perez',
    email       :   'jperez@gmail.com',
    edad        :   20,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.nombreCompleto());
console.log(persona);

let persona2 = new Object();
persona2.nombre = 'Agustin';
persona2.edad = 21;
persona2.dir = 'Valle de godrick';
console.log(persona2);

//Acceder a las propiedades del objeto
console.log(persona.nombre);
console.log(persona['nombre']);

//For in
for(let propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad]);
}

//Agregar propiedad al objeto
persona.tel = '132456789';
console.log(persona);

//Eliminar propiedad
delete persona.tel;
console.log(persona);

//Imprimir Objeto
//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ',' + persona.apellido);

//Iterando las propiedades
for(mio in persona){
    console.log(persona[mio]);
}

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);

//Acceder a los valores de las propiedades
//GET se indica que se un metodo 
persona = {
    nombre      :   'Juan',
    apellido    :   'Perez',
    email       :   'jperez@gmail.com',
    edad        :   20,
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
};
console.log(persona.nombreCompleto);

//SET modificar valores
persona = {
    nombre      :   'Juan',
    apellido    :   'Perez',
    email       :   'jperez@gmail.com',
    edad        :   20,
    idioma      :   'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set setlang(lange){
        this.idioma = lange.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
};

console.log(persona.lang);
persona.setlang = 'en';
console.log(persona.lang);
console.log(persona.idioma);

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('HOLA');//Esta es mas formal
let miCadena2 = 'HOLA';//Es mas recomendable por ser mas corta


//Metodo constructor se usa para reutilizar objetos y no crearlos uno por uno
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//Uso de propotype agrega el atrubuto o metodo a todos los nuevos objetos
Persona.prototype.tel = '123123';

let nuevaPersona = new Persona('Agustin','Andres','aasalazar@gmail.com');
console.log(nuevaPersona.tel);
console.log(nuevaPersona,nuevaPersona.nombreCompleto());

let nuevaPersona2 = new Persona('Andres','Salazar','asalazar@gmail.com');
console.log(nuevaPersona2,nuevaPersona2.nombreCompleto());

//Uso de call nos permite llamar un metodo de un objeto desde otro objeto
let persona1 = {
    nombre : 'Juan',
    apellido : 'Perez',
    nombreCompleto : function(titulo,tel){
        //return this.nombre + ' ' + this.apellido;
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
};

let persona3 = {
    nombre : 'Carlos',
    apellido : 'Lara'
};

//Uso de call opara usar el metodo persona1.nombreCompleto con los datos del objeto persona2
console.log(persona1.nombreCompleto());
console.log(persona1.nombreCompleto.call(persona3));
//Se puede enviar argumentos al call
console.log(persona1.nombreCompleto.call(persona3,'Inge',3106961132));

//Metodo apply se usa para llamar metodos de otros objetos como el call
//Se pueden enviar argumentos
let arreglo = ['Lic',3106987];
console.log(persona1.nombreCompleto.apply(persona3,arreglo));
console.log(persona1.nombreCompleto.apply(persona3,['Dr.',3106987123]));
