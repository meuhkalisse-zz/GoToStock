import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from '../app-routing.module';

import { SocialCountComponent } from '../component/social.count.component';
import { SocialPostComponent } from '../component/social.post.component';
import { SocialMediaCountService } from '../services/socialMediaCountService';
import { SocialMediaPostService } from '../services/socialMediaPostService';

import { Store } from '../store/store';
import socialMediaCountReducer from '../store/reducers/socialMediaCountReducer';
import filterSettingsReducer from '../store/reducers/filterSettingsReducer';
import socialMediaTopPostReducer from '../store/reducers/socialMediaPostReducer';
import { TopSocialMediaPostModel } from '../model/topSocialMediaPostModel';
import { FilterSettings } from '../model/filterSettings';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    SocialCountComponent,
    SocialPostComponent
  ],
  providers: [
     {provide: 'FilterSettingsStore', useFactory:()=>(new Store<FilterSettings>(filterSettingsReducer, null))},
     {provide: 'SocialMediaCountStore', useFactory:()=>(new Store<number>(socialMediaCountReducer, 0))},
     {provide: 'SocialMediaPostStore', useFactory:()=>(new Store<TopSocialMediaPostModel>(socialMediaTopPostReducer, null))},
     {provide: 'SocialMediaCountService', useClass: SocialMediaCountService},
     {provide: 'SocialMediaPostService', useClass: SocialMediaPostService},
     ],
     exports: [SocialCountComponent, SocialPostComponent]
})
export class SocialPostModule { }
