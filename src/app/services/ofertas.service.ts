
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Oferta } from '../shared/oferta.model';

@Injectable()
export class OfertasService {
    
    constructor(private http : Http) { }
  
    public getOfertas() : Promise<Oferta[]> {
        return this.http.get( "http://localhost:3000/ofertas" )
            .toPromise()
            .then( ( answer : any ) => answer.json() )
    }

    public getOfertasDestaque() : Promise<Oferta[]> {
        return this.http.get( "http://localhost:3000/ofertas?destaque=true" )
            .toPromise()
            .then( ( answer : any ) => answer.json() )
    }

    public getOfertasPorCategoria( categoria : String ) : Promise<Oferta[]> {
        return this.http.get( `http://localhost:3000/ofertas?categoria=${categoria}` )
            .toPromise()
            .then( ( answer : any ) => answer.json() )
    }
}
