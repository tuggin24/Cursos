var usuarios = new Array();
var contUsuarios = 0;

function agregarUsuario(entrada){
    limpiar("usuarios");
    var listado = document.getElementById(usuarios);
    var usuario = entrada.value.trim();
    
    usuarios[contUsuarios++] = usuario;
    for(i = 0;i < usuarios.length; i++){
        var dato = i + " - "+ usuarios[i] + " <br>";
        imprimir(dato,"usuarios");
    }
    entrada.value = '';
    entrada.focus();
}

function buscarUsuarios(entrada){
    var nombre = entrada.value.trim();
    var dato = '';
    for(i = 0;i < usuarios.length; i++){
        if(nombre == usuarios[i]){
            var dato = "El usuario tiene la posición "+i;
            imprimir2(dato,"busqueda");
            entrada.value = '';
            entrada.focus();
            break;
        }else{
            document.getElementById("busqueda").innerHTML = "No se encontro resultados";
        }
    }
}

function imprimir(dato,campo){
    var listado = document.getElementById(campo);
    listado.innerHTML += dato;
}
function imprimir2(dato,campo){
    var listado = document.getElementById(campo);
    listado.innerHTML = dato;
}
function limpiar(campo){
    var listado = document.getElementById(campo);
    listado.innerHTML = '';
}