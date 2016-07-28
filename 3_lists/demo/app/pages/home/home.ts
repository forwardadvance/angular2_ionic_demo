import {Component} from '@angular/core';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  cats: Array<any>;
  constructor() {
    this.cats = [
      'Lemmy',
      'Hammy',
      'Fluff Star Alpha',
      'Francis Chemungleton the fifth'
    ]
  }
}
