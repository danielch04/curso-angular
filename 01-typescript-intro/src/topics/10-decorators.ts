//generalmente no nos sentamos a crear decoradores sino mas bien a usar los decoradores ya creados

//Decoradores: funciones especiales que se adjuntan a difrentes objetos+




function classDecorator <T extends { new (...args:any[]): {} } > (
    constructor: T
){
    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override';
    }
}

@classDecorator
export class SuperClass {

    public myProperty: string = 'ABC123';

    print(){
        console.log('Hola Mundo');
        
    }
}

console.log(SuperClass);//DEFINICION DE MI CLASE

const myClass = new SuperClass();
console.log(myClass);//INSTANCIA DE MI CLASE    