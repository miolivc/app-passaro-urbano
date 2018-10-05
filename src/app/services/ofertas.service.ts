import { Injectable } from 'rxjs/add/operators/toPromise';
import { Http } from '@angular/http';
import { Oferta } from '../shared/oferta.model';

export class OfertasService {
    
    constructor(private http : Http) { }
  
    public getOfertas() : Promise<Oferta[]> {
        this.http.get( "http://localhost:3000/ofertas" )
            .toPromise()
    }

}
