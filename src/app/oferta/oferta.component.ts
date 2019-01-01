import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta : Oferta;

  constructor(
    private route : ActivatedRoute, 
    private ofertasService : OfertasService
  ) { }

  ngOnInit() {
    // Snapshot Example 
    console.log( `Parametro Recebido por Snapshot: ${this.route.snapshot.params["id"]}` ) 

    // Subscribe Example
    // this.route.params.subscribe( ( param : any ) => {
    //   console.log( `Parametro passado pelo Subscribe ${param.id}` )
	// })
	
	this.ofertasService.getOfertasByID(this.route.snapshot.params["id"])
		.then( ( oferta : Oferta ) => {
			this.oferta = oferta;
		}) 
  } 

}
