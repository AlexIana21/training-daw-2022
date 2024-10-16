function select(array, condition) {
    return array.filter(condition);
}


let values = [1, 2, 3, 5, 7, 13, 17, 23, 29];

const pairs = num => num % 2 === 0; 
const mas15 = num => num > 15;       
const menos10 = num => num < 10;       

const pares = select(values, pairs);
const mayoresQue15 = select(values, mas15);
const menoresDe10 = select(values, menos10);

console.log('Pares:', pares);                  
console.log('Mayores que 15:', mayoresQue15);   
console.log('Menores de 10:', menoresDe10);    
