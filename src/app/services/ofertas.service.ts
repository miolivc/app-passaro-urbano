
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Oferta } from '../shared/oferta.model';

@Injectable()
export class OfertasService {

    private url : String = "http://localhost:3000/ofertas";

    constructor(private http: Http) { }

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${this.url}`)
            .toPromise()
            .then((answer: any) => answer.json())
    }

    public getOfertasDestaque(): Promise<Oferta[]> {
        return this.http.get(`${this.url}?destaque=true`)
            .toPromise()
            .then((answer: any) => answer.json())
    }

    public getOfertasPorCategoria(categoria: String): Promise<Oferta[]> {
        return this.http.get(`${this.url}?categoria=${categoria}`)
            .toPromise()
            .then((answer: any) => answer.json())
    }

    public getOfertasByID(id: number): Promise<Oferta> {
        return this.http.get(`${this.url}?id=${id}`)
            .toPromise()
            .then((answer: any) => answer.json().shift())
    }

}
