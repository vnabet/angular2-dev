import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app',
  template: require('./test.html'),
})
export class App implements OnInit {
  constructor() {
    console.log('toto');
  }

  ngOnInit() {

  }

}
