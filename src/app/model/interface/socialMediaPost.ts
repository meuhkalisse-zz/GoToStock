import { SocialMedia } from '../enums/socialMedia';

export interface SocialMediaPost{
    From: SocialMedia,
    Text: string
    PostedOn: Date
}