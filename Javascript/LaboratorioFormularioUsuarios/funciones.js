function enviardatos(form){
    console.log("paso");
    var nombre = form.nombre;
    var apellido = form.apellido;
    var email = form.email;
    var numero = /[0-9]/g;
    var arroba = /@/g;

    if(nombre.value.match(numero)){
        alert("El campo nombre no puede contener número");
        nombre.focus();
        return false;
    }

    if(apellido.value.match(numero)){
        alert("El campo apellido no puede contener número");
        nombre.focus();
        return false;
    }

    if(!email.value.match(arroba)){
        alert("El campo email debe contener el @");
        nombre.focus();
        return false;
    }
    alert("Se enviaron correctamente los datos.")
    return true;
}

function limpiar(){
    var nombre = document.getElementById("nombre");
    nombre.value = '';
}