import { Component, Inject } from '@angular/core';
import { Store } from '../store/store';
import { FilterSettings } from '../model/filterSettings';
import { ISocialMediaCountService } from '../services/interface/socialMediaCountService';

@Component({
  selector: 'social-count',
  templateUrl: '../html/social.count.component.html',
  styleUrls: ['../css/social.count.component.css']
})

export class SocialCountComponent {

  private unSubscribe: UnsubscribeCallback;

  constructor(@Inject('SocialMediaCountStore') private socialCountStore: Store<number>,
                @Inject('FilterSettingsStore') private filterStore: Store<FilterSettings>,
                @Inject('SocialMediaCountService') private socialMediaCountService: ISocialMediaCountService){
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
