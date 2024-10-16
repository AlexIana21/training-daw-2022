function printMultiplicationTables() {
    let cadena = ``
    for (let x = 1; x < 11 ; x++) {
        let cadena = `${x}: `
        for (let y = 1; y < 11; y++) {
            cadena += `${x * y}\t`
        }
        console.log(cadena)
    }
}