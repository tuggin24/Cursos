const mostrarReloj =  () => {
    let fechaHoy = new Date()
    let hora = formatHora(fechaHoy.getHours());
    let minutos = formatHora(fechaHoy.getMinutes());
    let seg = formatHora(fechaHoy.getSeconds());

    //Asignamos la hora al componente HTML
    document.getElementById('hora').innerHTML = `${hora}:${minutos}:${seg}`;

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Noviembre', 'Diciembre'];
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Sábado']
    let diaSemana = dias[fechaHoy.getDay()];
    let dia = fechaHoy.getDate();
    let mes = meses[fechaHoy.getMonth()];
    let ano = fechaHoy.getFullYear();
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;

    //Asignamos el valor de fecha al div
    document.getElementById('fecha').innerHTML = fechaTexto;

    //classList: Trae todas las clases del componente
    //toggle: Si existe el estilo lo quita, si no lo agrega
    document.getElementById('contenedor').classList.toggle('animar');
}

//Funcion que agrega un 0 a la izquierda
const formatHora = (hora) => {
    if(hora < 10){
        hora = '0' + hora; 
    }
    return hora;
}

//Llamamos la funcion cada segundo
setInterval(mostrarReloj,1000);