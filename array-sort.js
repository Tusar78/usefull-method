const numbers = [16, 23, 49, 57, 66, 78, 4, 1, 81, 74, 3, 92, 19, 2, 24, 54, 75];
console.log(numbers.sort((a, b)=> {
    return a - b;
}).reverse());