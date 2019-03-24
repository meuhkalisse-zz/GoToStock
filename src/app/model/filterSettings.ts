import { StockModel } from './stockModel';
import { Algorythm } from './enums/algorythmEnum';

export class FilterSettings{
    model: StockModel;
    startDate: Date;
    endDate: Date;
    socialMedia: string;
    Algorythm: Algorythm = Algorythm.ArbitrageOpportunities;
    fetched: boolean = false;
    CalculateRecommendation: boolean = true;
}