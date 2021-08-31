import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private regionService: PaisService) {}

  activarRegion(region: string) {
    if (region === this.regionActiva) return;
    this.regionActiva = region;
    this.paises = [];

    this.regionService.buscarRegion(region).subscribe(
      //Se usa termino que viene como parámetro
      (paises) => {
        this.paises = paises; //Asigné a this.paises el parámetro paies para poder desplegar los paises en función del país de búsqueda
      },
      (err) => {
        this.paises = [];
      }
    );
  }
}
