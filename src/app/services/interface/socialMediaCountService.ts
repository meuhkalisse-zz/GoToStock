import { FilterSettings } from 'src/app/model/filterSettings';

export interface ISocialMediaCountService{
    socialMediaCountGenerator(currentFilter: FilterSettings);
}