let suma = function(a:number, b:number){
    return a+b;
}

console.log("Suma:", suma(5,3));

//let sumaFlecha = (a:number, b:number) => a+b;

let sumaFlecha = (a:number, b:number) => {
    return a+b;
}

console.log("Suma Flecha:", sumaFlecha(5,5));

var obtenerNombre = function(){
    return 'Jua Perez';
}

let obtenerNombreFlecha = () => "Juan Perez";

console.log("Obtener Nombnre Flecha:", obtenerNombreFlecha());