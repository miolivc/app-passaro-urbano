import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';
import { Observable, Subject , of } from 'rxjs';

import { Oferta } from '../shared/oferta.model';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  private ofertas : Observable<Oferta[]>;
  private subjectPesquisa : Subject<string> = new Subject<string>();

  constructor(private ofertasService : OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termo : string) => {
        if (termo.trim() === "") {
          return of([]);
        }

        return this.ofertasService.pesquisarOfertas(termo);
      }),
      catchError((err : any) => {
        return new Observable<Oferta[]>();
      })
    );
  }

  public pesquisar(termoDaPesquisa : string) : void {
    this.subjectPesquisa.next(termoDaPesquisa);   
  }

  public limparPesquisa() : void {
    this.subjectPesquisa.next("")
  }
 
}
