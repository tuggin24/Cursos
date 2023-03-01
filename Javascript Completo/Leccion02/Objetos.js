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