
function insertIfNotExists(array, item, position) {
    if (!array.includes(item)) {
        if (position) {
            array.unshift(item);
        }
        else {
            array.push(item);
        }
    }
    return array
}

let array = ['pera', 'manzana']

// Prueba 1
let result = insertIfNotExists(array, 'pera', false);
console.log(result);

// Prueba 2
result = insertIfNotExists(array, 'melón', false);
console.log(result); 

// Prueba 3
result = insertIfNotExists(array, 'melocotón', true);
console.log(result); 

// Prueba 4
result = insertIfNotExists(array, 'melocotón', true );
console.log(result); 

// Prueba 5
result = insertIfNotExists(array, 'fresa', false );
console.log(result);