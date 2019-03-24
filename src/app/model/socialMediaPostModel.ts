import { SocialMediaPost } from './interface/socialMediaPost';
import { SocialMedia } from './enums/socialMedia';

export class SocialMediaPostModel implements SocialMediaPost{
    From: SocialMedia; 
    Text: string;
    PostedOn: Date;
}