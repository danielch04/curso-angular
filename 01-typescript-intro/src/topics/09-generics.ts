

// lo que se quiere lograr con esta funcion es que al recibir un dato la funcion devuelva a que tipo de dato pertenece sin tener que declarar el tipo de dato del argumento como any

//esto se lograra usando los genericos, segun la nomenclatura standard el primer generico debe ser una T
export function whatsMyType<T> ( argument: T ): T {

    return argument;
}

let amIString = whatsMyType<string>('Hola Mundo');
let amINumber = whatsMyType<number> (100);
let amIArray = whatsMyType<number[]> ([1,2,3,4,5,6]);


console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join('-') );