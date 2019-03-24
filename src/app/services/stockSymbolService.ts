import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { StockModel } from '../model/stockModel';
import { MockStockSymbolProvider } from '../providers/mockStockSymbolProvider';
import { IStockSymbolProvider } from '../providers/interface/StockSymbolProvider';
import { IStockSymbolService } from './interface/StockSymbolService';
import { Store } from '../store/store';

@Injectable({
    providedIn: 'root',
})

export class StockSymbolService implements IStockSymbolService{
    constructor(@Inject('StockProvider') private provider: IStockSymbolProvider,
                @Inject('StockSymbolStore') private store: Store<Array<StockModel>>) {
    }

    getAllStockSymbol() {
        this.provider.getAllStockSymbol().subscribe((data: Array<StockModel>) => {
            this.store.dispatch({type: 'SET', payload: data});
          });
    }
}