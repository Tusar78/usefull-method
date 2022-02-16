const products = [
    'blackberry phone',
    'hp laptop',
    'intel code i3 laptop 5th generation',
    'itel laptop',
    'google plus pHone',
    'realme phone'
];

const searching = 'phone';

const output = [];

// My way
/*
for (const product of products) {
    if (product.toLowerCase().includes(searching)) {
        console.log(product);
    } 
}
*/

// Another way
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product)
    }
}

console.log(output);