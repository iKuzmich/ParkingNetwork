import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SmartContractService } from './services/smart-contract.service';
import {PageNotFoundComponentComponent, SellingSlotsComponentComponent, SellComponentComponent, BuyComponentComponent} from './components';

const appRoutes: Routes =[
  { path: '', component: SellingSlotsComponentComponent},
  { path: 'sell', component: SellComponentComponent},
  { path: 'buy', component: BuyComponentComponent},
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponentComponent,
    SellingSlotsComponentComponent,
    SellComponentComponent,
    BuyComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    AppComponent
  ],
  providers: [SmartContractService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
