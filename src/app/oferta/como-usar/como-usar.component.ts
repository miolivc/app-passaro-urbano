import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
	selector: 'app-como-usar',
	templateUrl: './como-usar.component.html',
	styleUrls: ['./como-usar.component.css'],
	providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

	public comoUsar : string;

	constructor(
		private route: ActivatedRoute,
		private ofertasService : OfertasService
	) { }

	ngOnInit() {

		this.route.params.subscribe((params : Params) => {
			this.ofertasService.getComoUsarOfertaPorId(params.id)
			.then( (answer : string) => this.comoUsar = answer );
		});	
	}

}
