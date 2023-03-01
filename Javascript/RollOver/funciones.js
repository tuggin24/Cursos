window.onload = cargarImagenes;

function cargarImagenes(){
    for(var i = 0; i< document.images.length; i++){
        if(document.images[i].parentNode.tagName == "A"){
            configuraRollOver(document.images[i]);
        }
    }
}

function configuraRollOver(imagen){
    imagen.imagenOff = new Image();
    imagen.imagenOff.src = "boton_off.jpg";
    imagen.onmouseout = cambiaOff;

    imagen.imagenOn = new Image();
    imagen.imagenOn.src = "boton_on.jpg";
    imagen.onmouseover = cambiaOn;
}

/*
Estas funciones se ejecutan segun el evento que se dispare, pero no es al inicar la pagina,
sino dependen del boton que se presione, con conocidas como handlers
*/
function cambiaOff(){
    this.src = this.imagenOff.src;//tomamos lo valores ya asociados
}

function cambiaOn(){
    this.src = this.imagenOn.src;//tomamos lo valores ya asociados
}