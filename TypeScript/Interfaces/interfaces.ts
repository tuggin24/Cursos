interface Usuario{
    nombreUsuario: string;
    password: string;
    confirmarPassword?: string;
}

let usuario1: Usuario = {nombreUsuario: 'Juan', password: '123'};

console.log("Usuario->",usuario1);
console.log("Nombre Usuario->",usuario1.nombreUsuario);

interface Abordar{
    abordarTransporte():void;
}

let avion:Abordar = {
    abordarTransporte: function(){
        console.log("Abordando");
    }
}

avion.abordarTransporte();