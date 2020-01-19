import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
	selector: 'app-oferta',
	templateUrl: './oferta.component.html',
	styleUrls: ['./oferta.component.css'],
	providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

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

	}

	ngOnDestroy() {
	} 

}
