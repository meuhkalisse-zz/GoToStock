import { Component, Inject } from '@angular/core';
import { Store } from '../store/store';
import { StockModel } from '../model/stockModel';
import { FilterSettings } from '../model/filterSettings';
import { SocialMediaCountService } from '../services/socialMediaCountService';

@Component({
  selector: 'social-count',
  templateUrl: '../html/social.count.component.html',
  styleUrls: ['../css/social.count.component.css']
})

export class SocialCountComponent {

  private unSubscribe: UnsubscribeCallback;

  constructor(@Inject('SocialMediaCountStore') private socialCountStore: Store<number>,
                @Inject('FilterSettingsStore') private filterStore: Store<FilterSettings>,
                private socialMediaCountService: SocialMediaCountService){
    this.unSubscribe = filterStore.subscribe(() => {
        if(this.filterStore.getState().fetched){
            this.socialMediaCountService.socialMediaCountGenerator(this.filterStore.getState());
        }
    });
  }

  public isFetched() : boolean{
    return this.filterStore.getState().fetched;
  }

  public postCount(): number{
      return this.socialCountStore.getState();
  }
  
}
