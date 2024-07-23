//aqui va todo el codigo que queemos de typeScript
//todo debe ser codigo valido de typescript

const name:string = 'Strider'; 

let hpPoints: number | 'FULL' = 95; //despues de los dos puntos es el tipado del dato
let isLive:boolean = true;          //el PIPE indica que hay as de un tipo de dato que acepta la variable

hpPoints = 'FULL';

console.log({
    name,hpPoints, isLive
});



export {};