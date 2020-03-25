import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

		this.route.params.subscribe((params : Params) => {
			this.ofertasService.getOfertasByID(params.id)
			.then((oferta: Oferta) => {
				this.oferta = oferta;
			})
		});
	}

	ngOnDestroy() {
	} 

}
