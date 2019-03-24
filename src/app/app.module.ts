import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app.component';
import { HeaderComponent } from './component/header.component';
import { StockComponent } from './component/stock.component';
import { StockSymbolService } from './services/stockSymbolService';
import { HttpClientModule } from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MockStockSymbolProvider } from './providers/mockStockSymbolProvider';
import { MockStockPriceService } from './services/mockStockPriceService';
import { StockPricesComponent } from './component/stock.prices.component';
import { Store } from './store/store';
import { StockModel } from './model/stockModel';
import stockSymbolsReducer from './store/reducers/StockSymbolsReducer';
import { FilterSettings } from './model/filterSettings';
import filterSettingsReducer from './store/reducers/filterSettingsReducer';
import { MockSocialMediaService } from './services/mockSocialMediaService';
import { MockAlgorythmService } from './services/mockAlgorythmService';
import { MockSocialMediaCountProvider } from './providers/mockSocialMediaCountProvider';
import socialMediaCountReducer from './store/reducers/socialMediaCountReducer';
import { SocialCountComponent } from './component/social.count.component';
import { SocialMediaCountService } from './services/socialMediaCountService';
import { MockRecommendationProvider } from './providers/mockRecommendationProvider';
import { RecommendationService } from './services/recommendationService';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    StockComponent,
    StockPricesComponent,
    SocialCountComponent
  ],
  providers: [
     {provide: 'StockProvider', useClass: MockStockSymbolProvider},
     {provide: 'SocialMediaCountProvider', useClass: MockSocialMediaCountProvider},
     {provide: 'RecommendationProvider', useClass: MockRecommendationProvider},
     {provide: 'StockPriceService', useClass: MockStockPriceService},
     {provide: 'SocialMediaService', useClass: MockSocialMediaService},
     {provide: 'AlgorythmService', useClass: MockAlgorythmService},
     {provide: 'StockSymbolStore', useFactory:()=>(new Store<Array<StockModel>>(stockSymbolsReducer, null))},
     {provide: 'FilterSettingsStore', useFactory:()=>(new Store<FilterSettings>(filterSettingsReducer, null))},
     {provide: 'SocialMediaCountStore', useFactory:()=>(new Store<number>(socialMediaCountReducer, 0))},
     StockSymbolService,
     SocialMediaCountService,
     RecommendationService,
     DatePipe
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }