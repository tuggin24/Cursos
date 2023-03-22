const ingresos = [
    new Ingreso( 'Salario', 1500 ),
    new Ingreso( 'Carro', 1000 ),
    new Ingreso( 'Ruta xD', 100 )
];

const egresos = [
    new Egreso( 'Alquiler', 900 ),
    new Egreso( 'Ropa', 600 ),
    new Egreso( 'Tarjeta', 600 )
];

//Funcion Inicial
let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

//Calculamos ingresos
let totalIngresos = () => {
    let total = 0;
    for( let ing of ingresos ){
        total += ing._valor;
    }
    return total;
}


//Calculamos egresos
let totalEgresos = () => {
    let total = 0;
    for( let eng of egresos ){
        total += eng._valor;
    }
    return total;
}

//Calculamos todos los datos del cabecero
let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgresos = totalEgresos() / totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentajeEgresos').innerHTML = formatoPorcentaje(porcentajeEgresos);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMonedaInt = (valor) => {
    return valor.toLocaleString( 'es-CO', { style: 'currency', currency: 'COP', minimunFractionDigits: 2 } );
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString( 'es-ES', { style: 'currency', currency: 'COP', minimunFractionDigits: 2 } );
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString( 'en-US', { style: 'percent', minimunFractionDigits: 2 } );
}


//Creamos dinamicamente un ingreso con template string
const cargarIngresos = () => {
    let ingresosHTML = '';
    for( let ing of ingresos ){
        ingresosHTML += crearIngresoHTML( ing );
    }
    document.getElementById( 'lista-ingresos' ).innerHTML = ingresosHTML;
}
const crearIngresoHTML = ( ing ) => {
    let ingresosHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ing._descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">+ ${formatoMoneda(ing._valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ing._id})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return ingresosHTML;
}

const eliminarIngreso = (id) => {
    ingresos.splice( ingresos.findIndex( ingresos =>  ingresos._id === id ), 1 );
    cargarCabecero();
    cargarIngresos();
}

//Creamos dinamicamente un egreso con template string
const cargarEgresos = () => {
    let egresosHTML = '';
    for( let egr of egresos ){
        egresosHTML += crearEgresoHTML( egr );
    }
    document.getElementById( 'lista-egresos' ).innerHTML = egresosHTML;
}
const crearEgresoHTML = ( egr ) => {
    let ingresosHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egr._descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor"> ${formatoMoneda(egr._valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(egr._valor / totalIngresos())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egr._id})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return ingresosHTML;
}

const eliminarEgreso = (id) => {
    egresos.splice( egresos.findIndex( egresos =>  egresos._id === id ), 1 );
    cargarCabecero();
    cargarEgresos();
}


//Agregamos un nuevo ingreso o egreso
const agregarDato = () =>{
    let form = document.forms['form'];
    let tipo = form['tipo'].value;
    let desc = form['descripcion'].value;
    let val = form['valor'].value;

    if(desc !== '' && val !== ''){
        if(tipo == 'ingreso'){
            ingresos.push( new Ingreso( desc, +val ) );
        }else{
            egresos.push( new Egreso( desc, +val ) );
        }
    }
    cargarApp();
}