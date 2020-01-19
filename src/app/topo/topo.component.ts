import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';
import { Observable } from 'rxjs';

import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  private ofertas : Observable<Oferta[]>;

  constructor(private ofertasService : OfertasService) { }

  ngOnInit() {
  }

  public pesquisar(termoDaPesquisa : string) : void {
    this.ofertas = this.ofertasService.pesquisarOfertas(termoDaPesquisa);

    this.ofertas.subscribe(
      (ofertas : Oferta[]) => console.log(ofertas),
      (error : any) => console.log(`Status Error: ${error.Status}`),
      () => console.log("Fluxo de Eventos Completo!")
    )
  }

}
