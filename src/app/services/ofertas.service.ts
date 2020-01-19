
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Oferta } from '../shared/oferta.model';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Injectable()
export class OfertasService {

    private url : String = "http://localhost:3000";

    constructor(private http: Http) { }

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${this.url}/ofertas`)
            .toPromise()
            .then((answer: Response) => answer.json())
    }

    public getOfertasDestaque(): Promise<Oferta[]> {
        return this.http.get(`${this.url}/ofertas?destaque=true`)
            .toPromise()
            .then((answer: Response) => answer.json())
    }

    public getOfertasPorCategoria(categoria: String): Promise<Oferta[]> {
        return this.http.get(`${this.url}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((answer: Response) => answer.json())
    }

    public getOfertasByID(id: number): Promise<Oferta> {
        return this.http.get(`${this.url}/ofertas?id=${id}`)
            .toPromise()
            .then((answer: Response) => answer.json().shift())
    }

    public getComoUsarOfertaPorId(id: number) : Promise<string> {
        return this.http.get(`${this.url}/como-usar?id=${id}`)
            .toPromise()
            .then((answer : Response) => answer.json().shift().descricao)
    }

    public getOndeFicaOfertaPorId(id: number) : Promise<string> {
        return this.http.get(`${this.url}/onde-fica?id=${id}`)
            .toPromise()
            .then((answer : Response) => answer.json().shift().descricao)
    }

    public pesquisarOfertas(termo : string) : Observable<Oferta[]> {
        return this.http.get(`${this.url}/ofertas/?descricao_oferta_like=${termo}`)
            .pipe(
                map((response : Response) => response.json()),
                retry(10)  // Efetua 10 tentativas antes de exibir o erro
            )
    }

}
