import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  toastLevel: Number;
  handleRefresh(refresh) {
    console.log('refreshing');
    setTimeout(() => {
      this.toastLevel = Math.floor(Math.random()*100);
      console.log('refreshed');
      refresh.complete();
    }, 2000);
  }
  constructor() {
    this.toastLevel = 12;
  }
}
