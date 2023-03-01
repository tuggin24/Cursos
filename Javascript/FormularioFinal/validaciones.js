/**
 * Funcion para validar los elemento requeridos (*)
 * @param {Object} form
 */
function validarForma(forma){
    //Validamos el usuario
    var usuario = forma.usuario;
    if(usuario.value == "" || usuario.value == "Escribir usuario"){
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }
    //Validamos el password
    var password = forma.password;
    if(password.value == "" || password.value.length < 3){
        alert("Debe proporcionar unpassword al menos de 3 caracteres");
        password.focus();
        password.select();
        return false;
    }

    //Validamos las tecnologias de interes
    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;
    //Validamos si se selecciono algun checkbox
    for(i = 0; i<tecnologias.length; i++){
        if(tecnologias[i].checked){
            checkSeleccionado = true;
        }
    }
    if(!checkSeleccionado){
        alert("Debe proporcionar una Técnologia");
        return false;
    }

    //Validamos el genero
    var generos = forma.genero;
    var radioSeleccionado = false;
    //Validamos que haya un genero seleccionado
    for(i = 0; i < generos.length; i++){
        if(generos[i].checked){
            radioSeleccionado = true;
        }
    }
    if(!radioSeleccionado){
        alert("Debe seleccionar un género");
        return false;
    }

    //Validamos la ocupacion
    var ocupacion = forma.ocupacion;
    if(ocupacion == ""){
        alert("Debe seleccionar una ocupación");
        return false;
    }

    //Formuario Validado
    alert("Formularios valido, enviando datos...");
    return true;
}