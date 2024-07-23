
//si sé que una variable nunca va a cambiar entonces es mejor declararla como constante
const skills: string[]  = ['Bash', 'Counter','Healing']//arreglo de strings

//una interface equivale a cero lineas de codigo de javascript

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;//la ? significaria que el valor puede ser opcional o indefinido
}
//aqui no se pueden usar los dos puntos(:) para indicar el tipo de dato en las variables por que es un objeto literal de
//javascipt, ya que se estaria rompiendo la regla, debido a esto se crea una interface donde se asignan los tipos de dato
//y en base a esta interface se le asigna al objeto literal como tipo de dato la interface.
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}

strider.hometown='Rivendell';//se hace referencia al objeto y se le asigna la propiedad restante si asi se desea ya que para este caso es opcional.

console.table(strider);

 
export{};// con export transformamos este archivo en un modulo
