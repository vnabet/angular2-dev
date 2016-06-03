import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app',
  template: '<h1>hello</h1>'
})
export class App {
  constructor() {
    console.log('toto');
  }

}
