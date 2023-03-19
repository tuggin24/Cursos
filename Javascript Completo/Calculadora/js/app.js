function sumar(){
    const form = document.getElementById('form');
    let a = form['operandoA'];
    let b = form['operandoB'];
    resultado = (parseInt(a.value) + parseInt(b.value));
    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}