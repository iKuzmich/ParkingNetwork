import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  onSellingSlotsSelected() {
    console.log('sell list');
  }

  onSellSelected() {
    console.log('sell');
  }

  onBuySelected() {
    console.log('buy');
  }

}
