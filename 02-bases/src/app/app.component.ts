import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'Mi primera app de Angular'; es la forma corta pero no la usaremos, sino la indicada abajo
  public title: string = 'Hola Mundo';//mejora la legibilidad del código
  public counter: number = 10;

  increaseBy( value:number ):void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 10;
  }


}
