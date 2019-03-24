import { FilterSettings } from 'src/app/model/filterSettings';

export interface ISocialMediaCountProvider{
    getSocialMediaCount(currentSetting: FilterSettings);
}