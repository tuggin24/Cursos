//Creamos la clase principal para el sistema de ventas
class Producto{
    static contadorProductos = 0;
    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get IdProducto(){
        return this._idProducto;
    }
    get Nombre(){
        return this._nombre;
    }
    set Nombre(nombre){
        this._nombre = nombre;
    }
    get Precio(){
        return this._precio;
    }
    set Precio(precio){
        this._precio = precio;
    }
    toString(){
        return 'IdProducto: ' + this._idProducto + ' Nombre: ' + this._nombre + ' Precio: $'+this._precio;
    }
}

let producto1 = new Producto('Zapatos',15200);
console.log(producto1.toString());
let producto2 = new Producto('Camisa',50000);
console.log(producto2.toString());

class Orden{
    static contadorOrden = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._productos = [];
        this._contadorProductosAgregador = 0;
    }
    get IdOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length <= Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregador++] = producto; Tambien se puede de esta forma, pero es mejor el push.
        }else{
            console.log("Se excede la cantidad máxima de productos");
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        totalVenta += this._productos.map((dato) => dato._precio );
        console.log(totalVenta);
        totalVenta = 0;
        for(let orden of this._productos){
            totalVenta += orden._precio; 
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += '{' +producto.toString()+'}';
        }
        return (`Orden: ${this._idOrden} Total:$${this.calcularTotal()} , Productos: ${productosOrden}`);
    }
}

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
console.log(orden1.mostrarOrden());

let producto3 = new Producto('Pantalon',5000);
let orden2 = new Orden();
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2);
console.log(orden2.mostrarOrden());