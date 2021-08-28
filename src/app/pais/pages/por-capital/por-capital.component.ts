import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private CapitalService: CapitalService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino; //parámetro que se recibe

    this.CapitalService.buscarCapital(termino).subscribe(
      //Se usa termino que viene como parámetro
      (paises) => {
        this.paises = paises; //Asigné a this.paises el parámetro paies para poder desplegar los paises en función del país de búsqueda
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }
}
