/**
 * @author Agustin Salazar
 */
window.onload = iniciaDatos;

/**
 * Funcion que se manda llamar
 * al carga la pagina HTML
 */

function iniciaDatos(){
    document.getElementById("link").onclick = validaSalir;
    document.getElementById("linkSearch").onclick = busqueda;
}

/**
 * Valida si el usuario quiere salir o no
 */
function validaSalir(){
    if(confirm("Desea salir del sitio?")){
        alert("Nos vamos a gulugulu");
        return true;
    }else{
        alert("Nos quedamos aca ome");
        return false;
    }
}

/**
 * Pide una cadena para buscar en google
 */
function busqueda(){
 //Con la funcion prompt capturamos la información del usuario
 var respuesta = prompt("Escribe la cadena a buscar:","");
 //Si ubo una respuesta la concatenamos
 if(respuesta){
    alert("Tu respuesta fue "+respuesta);
    //El operador this nos sirve para referenciar
    //al elemento que provoco el evento, en este caso el elemento con idenficador "linkSearch"
    //y concatenamos la respuesta como un parametro de la peticion get
    var nuevoLink = this + "search?q=" + respuesta;
    alert("Nuevo Link: " + nuevoLink);
    //redireccionamos el link
    window.location = nuevoLink;
    //regresamo false, sino nos lleva al link originalmente
    //registrado en el elemento "linkSearch"
    return false;
 }else{
    alert("No se proporciono ninguna cadena")
    return false;
 }
}