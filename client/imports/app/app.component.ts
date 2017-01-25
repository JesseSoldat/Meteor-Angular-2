import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Parties } from '../../../both/collections/parties.collection';
import { Party } from '../../../both/models/party.model';

import template from './app.component.html';
 
@Component({
  selector: 'app',
  template
})
export class AppComponent {

	parties: Observable<Party[]>;

	constructor(){
		 this.parties = Parties.find({}).zone();
		// this.parties = [
  //     {'name': 'Dubstep-Free Zone',
  //       'description': 'Can we please just for an evening not listen to dubstep.',
  //       'location': 'Palo Alto'
  //     },
  //     {'name': 'All dubstep all the time',
  //       'description': 'Get it on!',
  //       'location': 'Palo Alto'
  //     },
  //     {'name': 'Savage lounging',
  //       'description': 'Leisure suit required. And only fiercest manners.',
  //       'location': 'San Francisco'
  //     }
  //   ];
	}
}