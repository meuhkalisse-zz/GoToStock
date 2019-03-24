import { Observable } from 'rxjs';
import { SocialMediaPostModel } from 'src/app/model/socialMediaPostModel';

export interface ISocialMediaPostProvider{
    getTopNSocialMediaPost(count: number): Observable<Array<SocialMediaPostModel>>;
    getTopNSocialMediaPostForEachSocialMedia(count: number): Observable<Array<SocialMediaPostModel>>;
}