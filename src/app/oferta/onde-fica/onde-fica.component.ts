import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
	selector: 'app-onde-fica',
	templateUrl: './onde-fica.component.html',
	styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

	private ondeFica : string;

	constructor(
		private route : ActivatedRoute,
		private ofertasService : OfertasService
	) { }

	ngOnInit() {

		this.route.params.subscribe((params : Params) => {
			this.ofertasService.getOndeFicaOfertaPorId(params.id)
			.then( (answer : string) => this.ondeFica = answer );
		});
	}

}
