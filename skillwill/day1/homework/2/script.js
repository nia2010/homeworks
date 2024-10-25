function weather(fahrenheit){
    if(typeof fahrenheit !== 'number')
        return false


    return (fahrenheit - 32) * 5 / 9 + "°C"
    
}

console.log(weather('95'));
console.log(weather(95));



