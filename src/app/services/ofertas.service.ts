
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Oferta } from '../shared/oferta.model';

@Injectable()
export class OfertasService {

    private url : String = "http://localhost:3000";

    constructor(private http: Http) { }

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${this.url}/ofertas`)
            .toPromise()
            .then((answer: any) => answer.json())
    }

    public getOfertasDestaque(): Promise<Oferta[]> {
        return this.http.get(`${this.url}/ofertas?destaque=true`)
            .toPromise()
            .then((answer: any) => answer.json())
    }

    public getOfertasPorCategoria(categoria: String): Promise<Oferta[]> {
        return this.http.get(`${this.url}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((answer: any) => answer.json())
    }

    public getOfertasByID(id: number): Promise<Oferta> {
        return this.http.get(`${this.url}/ofertas?id=${id}`)
            .toPromise()
            .then((answer: any) => answer.json().shift())
    }

    public getComoUsarOfertaPorId(id: number) : Promise<string> {
        return this.http.get(`${this.url}/como-usar?id=${id}`)
            .toPromise()
            .then((answer : any) => answer.json().shift().descricao)
    }

    public getOndeFicaOfertaPorId(id: number) : Promise<string> {
        return this.http.get(`${this.url}/onde-fica?id=${id}`)
            .toPromise()
            .then((answer : any) => answer.json().shift().descricao)
    }

}
