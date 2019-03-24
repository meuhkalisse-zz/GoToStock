import { Component, Inject } from '@angular/core';
import { Store } from '../store/store';
import { FilterSettings } from '../model/filterSettings';
import { IAlgorythmService } from '../services/interface/algorythmService';
import { IStockPriceService } from '../services/interface/stockPriceService';
import { Algorythm } from '../model/enums/algorythmEnum';
import { StockValues } from '../model/stockValues';
import { IRecommendationService } from '../services/interface/recommendateService';

@Component({
  selector: 'stock-prices',
  templateUrl: '../html/stock.prices.component.html',
  styleUrls: ['../css/stock.prices.component.css']
})

export class StockPricesComponent {

  public algoList: Array<string> = [];
  private unSubscribe: UnsubscribeCallback;

  constructor(@Inject('FilterSettingsStore') private filterSettingsStore: Store<FilterSettings>,
            @Inject('StockPriceService') private stockPricesService: IStockPriceService,
              @Inject('AlgorythmService') private algoService: IAlgorythmService,
              @Inject('RecommendationService') private recommendationService: IRecommendationService){
    this.algoList = algoService.getAllAlgorythm();
    this.unSubscribe = filterSettingsStore.subscribe(() => {
      if(this.canFetch())
        this.fetchValues();
    });
  }

  public canFetch(): boolean{
    let settings = this.filterSettingsStore.getState();
    return settings.model !== undefined &&
          settings.endDate !== undefined && 
          settings.startDate !== undefined &&
          settings.socialMedia !== undefined &&
          settings.Algorythm !== undefined && 
          settings.CalculateRecommendation === false;
  }

  public fetchValues() {
    if(!this.filterSettingsStore.getState().fetched){
      let values = this.stockPricesService.stockPriceGenerator(this.filterSettingsStore.getState());
      this.filterSettingsStore.dispatch({type: 'SETVALUES', payload: values});
    }
  }

  public dataLoaded() : boolean {
    let model = this.filterSettingsStore.getState().model;
    let values = model && model.Values;
    return values && values.length > 0;
  }

  public toggleDropDownVisibility(elementId: string) {
    document.getElementById(elementId).classList.toggle("show");
  }

  public selectAlgo(algo: Algorythm) {
    this.toggleDropDownVisibility('algoDropDown');
    this.filterSettingsStore.dispatch({ type: 'SETALGO', payload: algo });
  }

  public selectedAlgo(): Algorythm {
    return this.filterSettingsStore.getState().Algorythm;
  }

  public getValues(): Array<StockValues> {
    return this.filterSettingsStore.getState().model.Values;
  }

}
