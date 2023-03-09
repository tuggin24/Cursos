//No es posible crear objetos antes de generar la clase, no aplica el tema de hoisting
class Persona{
    static contadorObjetosPersona = 0; //Atributo estatico, atributos de nuestra clase 

    //Crear una variable estatica y no modificable
    //Simulamos una constante
    static get MAX_OBJ(){
        return 5;
    }
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorObjetosPersona < Persona.MAX_OBJ){
            this._idPersona = ++Persona.contadorObjetosPersona;
        }else{
            console.log("Ha superado el maximo de objetos")
        }
        
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    toString(){
        //Polimorfismo
        return this.nombreCompleto();
    }
}
class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);//Super se accede a los metodos y atributos del padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura
    /**
    * Desde la clase hija se modifica el comportamiento de la clase padre, como los metodos por ejemplo
    */
    nombreCompleto(){
        return super.nombreCompleto() +  ' Dep:' + this._departamento
    }
}

let persona1 = new Persona('Agustin','Andres');
let persona2 = new Persona('Juan','Perez');
let empleado1 = new Empleado('Andres','Andres','Soporte');

console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(Persona.contadorObjetosPersona);

//Variable constante
console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);//No cambia el valor

let persona3 = new Persona('Armando','Casas');
let persona4 = new Persona('Susana','Oria');
let persona5 = new Persona('Fernando','Rueda');
let persona6 = new Persona('Cristiano','Ronaldo');
