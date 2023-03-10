class Persona{

    static contadorPersonas = 0;
    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }
    get IdPersona(){
        return this._idPersona;
    }
    get Nombre(){
        return this._nombre;
    }
    set Nombre(nombre){
        this._nombre = nombre;
    }
    get Apellido(){
        return this._apellido
    }
    set Apellido(apellido){
        this._apellido = apellido;
    }
    get Edad(){
        return this._edad;
    }
    set Edad(edad){
        this._edad = edad;
    }

    toString(){
        return 'Nombre: '+this._nombre+' Apellido: '+this._apellido+' Edad: '+this._edad;
    }
}

class Empleado extends Persona{
    static contadorEmpleado = 0;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }
    get IdEmpleado(){
        return this._idEmpleado;
    }
    get Sueldo(){
        return this._sueldo;
    }
    set Sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return super.toString() + ' Sueldo: ' + this._sueldo;
    }
}

class Cliente extends Persona{
    static contadorCliente = 0;
    constructor(nombre,apellido,edad){
        super(nombre,apellido,edad);
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = new Date();
    }
    get IdCliente(){
        return this._idCliente;
    }
    get FechaRegistro(){
        return this._fechaRegistro;
    }
    set FechaRegistro(fecha){
        this._fechaRegistro = fecha;
    }
    toString(){
        return super.toString() + ' Fecha Registro: ' + this._fechaRegistro;
    }
}

let persona1 = new Persona('Agustin','Andres','21');
let empleado1 = new Empleado('Agustin','Andres','21',150000);
let cliente1 = new Cliente('Fabian','Andres','25');
console.log(persona1);
console.log(empleado1);
console.log(cliente1);
console.log(persona1.toString());
console.log(persona1.IdPersona);
console.log(empleado1.toString());
console.log(empleado1.IdEmpleado);
console.log(cliente1.toString());
console.log(cliente1.IdCliente);