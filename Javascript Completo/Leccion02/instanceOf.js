class Empleado{
    constructor(nombre,sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(departamento,nombre,sueldo){
        super(nombre,sueldo);
        this._departamento = departamento;
    }

    //Sobreescritura: Modifica el comportamiento de los metodos de la clase padre
    obtenerDetalles(){
        return ` Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
    }
}

function tipoClase(tipo){
    /**
     * instanceOf: Se usa para saber de que clase es el objeto 
     */
    if(tipo instanceof(Gerente)){
        return 'Clase Gerente: '+ tipo.obtenerDetalles() + ' Departamento: ' + tipo._departamento;
    }else{
        return 'Clase Empleado: '+ tipo.obtenerDetalles();
    }
    
}

let empleado1 = new Empleado('Agustin',15000);
let gerente1 = new Gerente('Sistemas','Andres',25000);

console.log( tipoClase(empleado1) );
console.log( tipoClase(gerente1) );