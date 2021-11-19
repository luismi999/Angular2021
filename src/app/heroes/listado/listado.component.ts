import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América'];
  public heroeBorrado: string = "";
  constructor() { } 
  borrarHeroe() { 
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
