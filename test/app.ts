import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app',
  template: require('./app.html'),
})
export class App implements OnInit {
  constructor() {
    console.log('toto');
  }

  ngOnInit() {
    
  }

}
