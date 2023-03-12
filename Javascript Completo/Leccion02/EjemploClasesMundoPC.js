//Clase Principal
class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get TipoEntrada(){
        return this._tipoEntrada;
    }
    get Marca(){
        return this._marca;
    }
    set TipoEntrada(tipo){
        this._tipoEntrada = tipo;
    }
    set Marca(marca){
        this._marca = marca;
    }
    toString(){
        return `Tipo: ${this._tipoEntrada} Marca: ${this._marca}`;
    }
}
//Ahora creamos las clases hijas
class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    toString(){
        return super.toString() + ` IdRaton: ${this._idRaton}`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    toString(){
        return super.toString() + ` IdTeclado: ${this._idTeclado}`;
    }
}

//Creamos clase aparte para los monitores
class Monitor{
    static contadorMonitores = 0;
    constructor(marca,tamano){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }
    get IdMonitor(){
        return this._idMonitor;
    }
    get Marca(){
        return this._marca;
    }
    get Tamano(){
        return this._tamano;
    }
    set Marca(marca){
        this._marca = marca;
    }
    set Tamano(tamano){
        this._tamano = tamano;
    }
    toString(){
        return ` IdMonitor: ${this._idMonitor} Marca: ${this._marca} Tamaño: ${this._tamano}`;
    }
}

//Creamos la clase que crea el computador
class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre,monitor,teclado,raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get IdComputadora(){
        return this._idComputadora;
    }
    get Nombre(){
        return this._nombre;
    }
    get Monitor(){
        return this._monitor;
    }
    get Teclado(){
        return this._teclado;
    }
    get Raton(){
        return this._raton;
    }
    set Nombre(nombre){
        this._nombre = nombre;
    }
    set Monitor(monitor){
        this._monitor = monitor;
    }
    set Teclado(teclado){
        this._teclado = teclado;
    }
    set Raton(raton){
        this._raton = raton;
    }
    toString(){
        return `IdComputador: ${this._idComputadora} Nombre: ${this._nombre} Monitor: [${this._monitor}] Teclado: [${this._teclado}] Ratón: [${this._raton}]`;
    }
}

//Creamos la clase para las ordenes de pedidos
class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = []
    }
    get IdOrden(){
        return this._idOrden;
    }
    get Computadoras(){
        return this._computadoras;
    }
    set Computadoras(computador){
        this._computadoras = computador;
    }
    agregarComputadora(computador){
        this._computadoras.push(computador);
    }
    mostrarOrden(){
        return `IdOrden: ${this._idOrden} Computadoras: [${this._computadoras}]`;
    }
}

let raton1      = new Raton('Cable','Razer');
let teclado1    = new Teclado('Bluetooth','Redragon');
let monitor1    = new Monitor('AOC','24 Inch');
let raton2      = new Raton('Cable','Cooler Master');
let teclado2    = new Teclado('Cable','Corsair');
let monitor2    = new Monitor('LG','32 Inch');
let raton3      = new Raton('Bluetooth','Viper');
let teclado3    = new Teclado('Bluetooth','Logitech');
let monitor3    = new Monitor('Samsung','27 Inch');
let pc1         = new Computadora('PCMASTER1',monitor1,teclado1,raton1);
let pc2         = new Computadora('PCMASTER2',monitor2,teclado2,raton2);
let pc3         = new Computadora('PCMASTER3',monitor3,teclado3,raton3);
let orden1      = new Orden();
let orden2      = new Orden();
orden1.agregarComputadora(pc1);
orden1.agregarComputadora(pc2);
orden2.agregarComputadora(pc3);
//orden1.Computadoras = pc3; Sirve
teclado1.Marca  = 'Logitech';
console.log(raton1.toString());
console.log(teclado1.toString());
console.log(monitor1.toString());
console.log(pc1.toString());
console.log(pc2.toString());
console.log(orden1.Computadoras);
console.log(orden1.mostrarOrden());
console.log(orden2.mostrarOrden());