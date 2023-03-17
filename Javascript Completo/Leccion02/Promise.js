let miPromesa = new Promise( (resolved, rejected) => {
    let expresion = false;
    if(expresion){
        resolved('Resolvio Correcto')
    }else{
        rejected('Se produjo un error');
    }
});

let miPromesa2 = new Promise( (resolved, rejected) => {
    let expresion = true;
    let a = 2;
    let b = 10;
    if(expresion){
        resolved( a + b);
    }else{
        rejected('Se produjo un error');
    }
});

miPromesa.then(
    valor => {
        console.log(valor)
    },
    error => {
        console.log(error)
    }
);

miPromesa.then(
    valor => {
        console.log(valor);
    }
).catch(
    error => {
        console.log(error);
    }
);

miPromesa2.then(
    valor => {
        console.log(valor);
    }
).catch(
    error => {
        console.log(error);
    }
);

// Promesas con timeout
let promesa = new Promise( (resolver) => {
    setTimeout( () => {
        resolver('Saludo con promesas y timeout')
    },3000)
});

promesa.then( (valor) => {
    console.log(valor);
});

//Palabra Async
//Async = indica que una funcion regresa una promesa
async function miFuncionConPromesa(){
    return 'Saludos con promesa y async'
}

miFuncionConPromesa().then( (valor) => {
    console.log(valor);
});

//Palabra Await
//Await obliga a esperar el resultado de una promesa

async function funcionConPromesaYAwait(){
    let mipromesa = new Promise( (resolver) => {
        resolver('Promesa con await')
    });

    console.log( await mipromesa );
}

funcionConPromesaYAwait();

//Promesa, Await, Async, SetTimeOut

async function funcionPromesaAwaitTimeout(){

    let miPromesa = new Promise( (resolver) => {
        setTimeout( () => {
            resolver('Promesa con await y timeout');
        },3000);
    });
    console.log( await miPromesa );
}

funcionPromesaAwaitTimeout();