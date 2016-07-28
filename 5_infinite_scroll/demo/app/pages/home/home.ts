import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  items: Array<number>;

  next: number;
  loadItems(scroll) {
    setTimeout(() => {
      this.items.push(this.next++)
      scroll.complete();
    }, 100);
  }
  constructor() {
    this.items = [1,2,3,4,5,6,7,8,9,10,11,12];
    this.next = 13
  }
}
