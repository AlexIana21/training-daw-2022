function imprimirContiguos(numero) {
    if (numero % 2 === 0) {
        console.log(numero - 2, numero + 2);
    } else {
        console.log(numero - 1, numero + 1);
    }
}

let numero1 = 8;
imprimirContiguos(numero1);