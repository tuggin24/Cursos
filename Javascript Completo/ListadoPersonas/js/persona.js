class Persona{
    constructor( nombre, apellido ){
        this._nombre = nombre,
        this._apellido = apellido
    }
    get Nombre(){
        return this._nombre;
    }
    get Apellido(){
        return this._apellido;
    }
    set Nombre(nombre){
        this._nombre = nombre;
    }
    set Apellido(apellido){
        this._apellido = apellido;
    }
}