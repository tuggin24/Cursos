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

function imprimir(tipo){
    /**
     * Polimorfismo: Si se usa un objeto de la clase padre, se llama al metodo de la clase padre,
     *  si se usa un objeto de la clase hija, llama al metodo de la clase hija 
     */
    return tipo.obtenerDetalles();
}

let empleado1 = new Empleado('Agustin',15000);
let gerente1 = new Gerente('Sistemas','Andres',25000);

console.log( imprimir(empleado1) );
console.log( imprimir(gerente1) );