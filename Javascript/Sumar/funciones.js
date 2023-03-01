function sumar(){
    //Envolvemos todo el código en bloque try y catch para procesar la excepcion en case de que haya error
    try{
        //pedimos el valor del operador a
        var a = prompt("Valor a","");
        //Validamo el parametro a, !a esta vacia o nula
        if(!a || isNaN(a)){
            throw new Error("Valor invalido de a: "+a)
        }

        //pedimos el valor del operador a
        var b = prompt("Valor b","");
        //Validamo el parametro a, !a esta vacia o nula
        if(!b || isNaN(b)){
            throw new Error("Valor invalido de b: "+b)
        }

        /*
        *Si no hay problemas hacemos la suma, convertimos a enteros los parametros 
        *parseInt convierte a entero, si no es entero no va a realizar la suma sino concatena los valores
        */

        var c = parseInt(a) + parseInt(b);
        alert("la suma es: "+c)
    }catch (e){
        alert("El error es: "+e.message);
    }
}