import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, interval, Observer, Subscription } from 'rxjs';

@Component({
	selector: 'app-oferta',
	templateUrl: './oferta.component.html',
	styleUrls: ['./oferta.component.css'],
	providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

	private observableTesteSubscription : Subscription;

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
			// Envia um evento de erro 
			observer.error('Foi gerado um erro ao tentar enviar o dado!');
			// Complete -> Execução Finalizada com sucesso
			observer.complete();
		})

		// Observador -> Este a cada mudança de estado dos nossos objetos observados realiza uma ação 
		this.observableTesteSubscription = observableTeste.subscribe(
			// O primeiro parametro recupera o evento de um novo dado alterado enviado com next()
			(texto : string) => console.log(`Texto recuperado do objeto observador: ${texto}`),
			// Segundo parametro captura erros ocorridos durante a execução
			(erro : any) => console.log(erro),
			// O ultimo parametro informa quando a ação foi completada - finalizada
			//  não haverão mais entradas de eventos nesse observable
			() => console.log('O processamento do observable foi finalizado com sucesso!')
		)
	}

	ngOnDestroy() {
		// Retira a inscrição do observable  
		this.observableTesteSubscription.unsubscribe();
	} 

}
