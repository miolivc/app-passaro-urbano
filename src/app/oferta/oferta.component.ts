import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, interval } from 'rxjs';

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

		interval(500).subscribe((intervalo : number) => console.log(intervalo));
	}

}
