"use strict";
let usuario1 = { nombreUsuario: 'Juan', password: '123' };
console.log("Usuario->", usuario1);
console.log("Nombre Usuario->", usuario1.nombreUsuario);
let avion = {
    abordarTransporte: function () {
        console.log("Abordando");
    }
};
avion.abordarTransporte();
