

//forma larga
/*export class Person{
        public name: string;
        private address:string;

        constructor(name:string, address:string){
            this.name = name;
            this.address = address;
        }
}*/

export class Person{

        constructor(
            public name:string, 
            private address:string = 'No Address'
        ) {}
}


const ironman = new Person('Ironman', 'New York');

console.log(ironman);
