let autos = new Array('BMW','Mercedez Benz','Volvo');
const autos2 = ['BMW','Mercedez Benz','Volvo'];
console.log(autos2);

console.log(autos2[2]);

for(let i = 0; i < autos2.length; i++){
    console.log(autos2[i]);
}

for(let i = 0; i < autos2.length; i++){
    if(autos2[i] == 'BMW'){
        autos2[i] = 'Nuevo BMW';
    }
    console.log(autos2[i]);
}

autos2.push('Audi');
console.log(autos2);

console.log(autos2.length);
autos2[autos2.length] = 'Ford';
console.log(autos2);

console.log(typeof(autos2));

//Identifica si es un array;
console.log(Array.isArray(autos2));
console.log(autos2 instanceof Array);