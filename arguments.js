function addNumber() {
    let result = 0;
    for (const argu of arguments) {
        result += argu;
    }
    return result;
}

const adding = addNumber(2, 3, 5, 7, 100)
console.log(adding);