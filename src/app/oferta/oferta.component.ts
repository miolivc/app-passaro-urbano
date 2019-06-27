import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, interval, Observer } from 'rxjs';

@Component({
	selector: 'app-oferta',
	templateUrl: './oferta.component.html',
	styleUrls: ['./oferta.component.css'],
	providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

	public oferta: Oferta;

	constructor(
		private route: ActivatedRoute,
		private ofertasService: OfertasService
	) { }

	ngOnInit() {
		let idOferta = this.route.snapshot.params["id"];
		
		this.ofertasService.getOfertasByID(idOferta)
		.then((oferta: Oferta) => {
			this.oferta = oferta;
		})

		// interval(500).subscribe((intervalo : number) => console.log(intervalo));

		// Observável -> Objeto no qual suas mudanças serão observadas, isto é,
		// haverá um objeto responsável por capturar esses 'eventos' de mudança e executar uma ação
		let observableTeste = Observable.create((observer : Observer<string>) => {
			// next realiza uma nova emissão do evento
			observer.next('Teste de Stream -> Esta é uma mudnaça no estado do objeto a ser observado');
		})

		// Observador -> Este a cada mudança de estado dos nossos objetos observados realiza uma ação 
		observableTeste.subscribe(
			(texto : string) => console.log(`Texto recuperado do objeto observador: ${texto}`)
		)
	}

}
