import { FilterSettings } from 'src/app/model/filterSettings';

export interface IRecommendationService{
    getRecommendation(currentFilter: FilterSettings, postCount: number);
}