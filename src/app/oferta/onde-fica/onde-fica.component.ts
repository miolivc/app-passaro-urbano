import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
		let idOferta = this.route.parent.snapshot.params["id"];
		this.ofertasService.getOndeFicaOfertaPorId(idOferta)
			.then( (answer : string) => this.ondeFica = answer );

	}

}
