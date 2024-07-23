
export interface Product {
    description: string;
    price: number;
}

const phone: Product ={
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product ={
    description: "ipad Air",
    price: 250.0
}
export interface TaxCalculationOpstions {
    tax: number;
    products:Product[];
}

//function taxCalculation(options:TaxCalculationOpstions):[number, number]{ //al saber que el return es una tupla destructuramos e indicamos el tipo de dato a retornar ( esto es propio de TypeScript)
//function taxCalculation({tax, products}:TaxCalculationOpstions):[number, number]{//destructurar los valores desde antes de asinrale un tipo aunque no la mas recomendada 
export function taxCalculation(options:TaxCalculationOpstions):[number, number]{//destructurar los valores desde antes de asinrale un tipo aunque no la mas recomendada en caso de tener muchas opciones en la interface
    const {tax, products } = options;

    let total = 0;
     products.forEach( ({ price }) =>{
        total += price;
     });
      return [total, total*tax ];
}



const shopingCart = [phone, tablet];
const tax = 0.15;


const [total, totalTax] = taxCalculation({
    products: shopingCart,
    tax: tax
});


console.log('Total', total);
console.log('Tax', totalTax);
