import { Recommendation } from './recommendation';

export class StockValues{
    Date: Date;
    CloseValue: number;
    Variation: number;
    VariationPercentage: number;
    Recommendation: Recommendation;
    Data: any;
}