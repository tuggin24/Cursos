

for(let i = 0; i <= 10; i++){
    console.log(i);
}

for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 == 0){
        console.log("es par",contador);
        break;
    }
}

inicio:
for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 != 0){
        continue inicio;
        console.log("No es par:",contador);
    }
    console.log("Es par:",contador);
    
}