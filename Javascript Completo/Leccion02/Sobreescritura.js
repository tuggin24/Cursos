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

let gerente = new Gerente('Sistemas','Agustin',15000);
console.log(gerente);
console.log(gerente.obtenerDetalles());