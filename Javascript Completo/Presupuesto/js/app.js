const ingresos = [
    new Ingreso( 'Salario', 1000 ),
    new Ingreso( 'Carro', 1000 )
];

const egresos = [
    new Egreso( 'Alquiler', 900 ),
    new Egreso( 'Ropa', 600 )
];

//Funcion Inicial
let cargarApp = () => {
    cargarCabecero();
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


let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgresos = totalEgresos() / totalIngresos()
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentajeEgresos').innerHTML = formatoPorcentaje(porcentajeEgresos);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString( 'es-CO', { style: 'currency', currency: 'COP', minimunFractionDigits: 2 } );
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString( 'en-US', { style: 'percent', minimunFractionDigits: 2 } );
}
