import { Injectable, Inject } from '@angular/core';
import { Store } from '../store/store';
import { ISocialMediaCountService } from './interface/socialMediaCountService';
import { FilterSettings } from '../model/filterSettings';
import { ISocialMediaCountProvider } from '../providers/interface/socialMediaCountProvider';

@Injectable({
    providedIn: 'root',
})

export class SocialMediaCountService implements ISocialMediaCountService{
    constructor(@Inject('SocialMediaCountProvider') private provider: ISocialMediaCountProvider,
                @Inject('SocialMediaCountStore') private socialMediaStore: Store<number>) {
    }

    public socialMediaCountGenerator(currentFilter: FilterSettings) {
        this.provider.getSocialMediaCount(currentFilter).subscribe((data: number) => {
            this.socialMediaStore.dispatch({type: 'SET', payload: data});
          });
    }
}