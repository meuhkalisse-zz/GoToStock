import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { StockModel } from '../model/stockModel';
import { MockStockSymbolProvider } from '../providers/mockStockSymbolProvider';
import { IStockSymbolProvider } from '../providers/interface/StockSymbolProvider';
import { IStockSymbolService } from './interface/StockSymbolService';
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