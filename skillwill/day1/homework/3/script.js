function arithmetic(a, b, operation) {

    if (typeof a !== 'number' || typeof b !== 'number') {
        return false;
    }

    if (operation === '+') 
        return a + b;
    if (operation === '-') 
        return a - b;
    if (operation === '*') 
        return a * b;
    if (operation === '/') {
        if (b === 0) 
            return false; 
        return a / b;
    }

    return false; 
}


console.log(arithmetic(12, 4, '+')); 
console.log(arithmetic(12, 4, '-')); 
console.log(arithmetic(12, 4, '*'));
console.log(arithmetic(12, 0, '/')); 
console.log(arithmetic(12, 4, '%')); 
console.log(arithmetic('12', 4, '+')); 
