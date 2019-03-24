import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StockModule } from './modules/stock.module';
import {DatePipe} from '@angular/common';

import { AppComponent } from './component/app.component';
import { HeaderComponent } from './component/header.component';
import { MockStockSymbolProvider } from './providers/mockStockSymbolProvider';
import { MockStockPriceService } from './services/mockStockPriceService';
import { MockAlgorythmService } from './services/mockAlgorythmService';
import { MockSocialMediaCountProvider } from './providers/mockSocialMediaCountProvider';
import { MockRecommendationProvider } from './providers/mockRecommendationProvider';
import { RecommendationService } from './services/recommendationService';
import { MockSocialMediaPostProvider } from './providers/mockSocialMediaPostProvider';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    StockModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  providers: [
     {provide: 'StockProvider', useClass: MockStockSymbolProvider},
     {provide: 'SocialMediaCountProvider', useClass: MockSocialMediaCountProvider},
     {provide: 'RecommendationProvider', useClass: MockRecommendationProvider},
     {provide: 'SocialMediaPostProvider', useClass: MockSocialMediaPostProvider},
     {provide: 'StockPriceService', useClass: MockStockPriceService},
     {provide: 'AlgorythmService', useClass: MockAlgorythmService},
     {provide: 'RecommendationService', useClass: RecommendationService},
     DatePipe
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
