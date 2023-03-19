const personas = [
    new Persona( 'Agustin', 'Salazar' ),
    new Persona( 'Juan', 'Perez' )
];

function mostrarPersonas(){
    console.log('Se esta ejecutando el metodo mostrar personas');
    let texto = '';
    for( let per of personas ){
        console.log(per);
        texto += `<li>${per._nombre} ${per._apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    let form = document.getElementById('formData');
    if(form['nombre'].value != '' && form['apellido'].value != ''){
        personas.push(new Persona( form['nombre'].value, form['apellido'].value ))
        mostrarPersonas();
    }else{
        alert("No hay información para agregar")
    }
}