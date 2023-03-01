function Saludar(target: Function):void{
    target.prototype.saludos = function():void{
        console.log("Hola desde decoradores");
    }
}

function Saludar2(target: Function):void{
    target.prototype.saludos = function():void{
        console.log("Hola desde decoradores");
    }
}

@Saludar
@Saludar2
class Hola{

    constructor(){}

}

let hola1 = new Hola();
hola1.saludos();