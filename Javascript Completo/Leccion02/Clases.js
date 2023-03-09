//No es posible crear objetos antes de generar la clase, no aplica el tema de hoisting
class Persona{
    static contadorObjetosPersona = 0; //Atributo estatico, atributos de nuestra clase 
    email = 'Valor default email'; // Atributo de nuestros objetos
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
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
        return this._nombre + ' ' + this._apellido;
    }

    //Sobreescritura
    //Modificamos el metodo heredado de la clase Object
    toString(){
        //Polimorfismo
        return this.nombreCompleto();
    }
    //Static solo se puede utilizar desde la clase y no desde el objeto
    static saludar(){
        console.log("Saludo desde metodo estatico");
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

//objeto o instancia de clase
let persona1 = new Persona('Agustin','Salazar');
console.log(persona1);

let persona2 = new Persona('Pepe','Pecas');
console.log(persona2);

//Usos del GET y SET
persona1.nombre = 'Andres';
console.log(persona1.nombre);
console.log(persona1.nombreCompleto());

//Herencias
/**
 * Se usa para heredar metodos y atributos de otras clases
 * para no volver a escribir codigo para eso se usa
 * extends
 */

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

let empleado1 = new Empleado('Agustin','Salazar','Sistemas');
console.log(empleado1);
console.log(empleado1.departamento);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());

//Polimorfismo: Basicamente llama al metodo dependiendo si el objeto de la clase padre o hija
console.log(empleado1.toString());
console.log(persona1.toString());

//persona1.saludar();//solo se puede utilizar desde la clase y no desde el objeto
Persona.saludar();
Persona.saludar2(persona1);
Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(persona1.contadorObjetosPersona);//No se puede llamar atributos estaticos desde los objetos
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

//Accediendo a atributos no declarados en el constructor
console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Empleado.email);