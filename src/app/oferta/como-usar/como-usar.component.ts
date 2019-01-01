import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-como-usar',
	templateUrl: './como-usar.component.html',
	styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

	constructor(
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		console.log(this.route.parent.snapshot.params["id"])
	}

}
