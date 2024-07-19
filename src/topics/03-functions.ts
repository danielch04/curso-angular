

//revisar el el archivo 03-functions


//void= como valor de retorno no regresa nada, a pesar de parecer lo mismo que undefined, significa que explicitamente en la funcion no existe "return"
//en javascript toda funcion regresa undefined
//es la principal diferencia aunque en el codigo esto sea totalmente indiferente.

//En TypeScript se aconseja que siempre tengamos el modo estricto, lo mas posible(se ve en el archivo tsconfig.json)
//se aconseja no aceptar el tipo de dato any por defecto y asignarle un tipo, en caso contrario escribirlo explicitamente
//function addNumbers( a:any , b:any ){
function addNumbers(a:number, b:number):number{
    return a + b;
}
const addNumberArrow = (a:number, b:number):string =>{
    return `${a+b}`;
}

function multiply (fisrtNumber:number, secondNumber?:number, base:number=2){
    return fisrtNumber * base;
}


//const result:number = addNumbers(1,2);
//const result2:string = addNumberArrow(1,2);
//const multiplyResult:number = multiply(5);
//console.log(result, result2, multiplyResult);
//console.log();





export{};