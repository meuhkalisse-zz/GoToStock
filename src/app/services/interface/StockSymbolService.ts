import { StockModel } from 'src/app/model/stockModel';
import { Observable } from 'rxjs';

export interface IStockSymbolService{
    getAllStockSymbol();
}