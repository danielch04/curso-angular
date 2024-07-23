
/*CUANDO SE EXPORTA SE DEBE ASEGURAR NO EJECUTAR CODIGO EN EL ARCHIVO EXPRTADO A MENOS QUE SEA ABSOLUTAMENTE NECESARIO*/

import { Product, taxCalculation } from './06-functions-destructuring';

const shoppingCart: Product[] = [{
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
];

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: 0.15,
}

);

console.log('Total', total);
console.log('Tax', taxTotal);


