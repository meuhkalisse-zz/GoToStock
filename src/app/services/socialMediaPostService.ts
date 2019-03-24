import { Injectable, Inject } from '@angular/core';
import { Store } from '../store/store';
import { ISocialMediaPostService } from './interface/socialMediaPostService';
import { ISocialMediaPostProvider } from '../providers/interface/socialMediaPostProvider';
import { TopSocialMediaPostModel } from '../model/topSocialMediaPostModel';
import { SocialMediaPostModel } from '../model/socialMediaPostModel';

@Injectable({
    providedIn: 'root',
})

export class SocialMediaPostService implements ISocialMediaPostService {
    constructor(@Inject('SocialMediaPostProvider') private provider: ISocialMediaPostProvider,
        @Inject('SocialMediaPostStore') private socialMediaStore: Store<Array<TopSocialMediaPostModel>>) {
    }

    getTopNSocialMediaPost(count: number) {
        this.socialMediaStore.dispatch({ type: "CLEARALLTIME" });
        this.provider.getTopNSocialMediaPost(count).subscribe((data: Array<SocialMediaPostModel>) => {
            data.forEach(post => {
                this.socialMediaStore.dispatch({ type: "ADDALLTIME", payload: post });
            });
        });
    }

    getTopNSocialMediaPostForEachSocialMedia(count: number) {
        this.socialMediaStore.dispatch({ type: "CLEARTOPEACH" });
        this.provider.getTopNSocialMediaPostForEachSocialMedia(count).subscribe((data: Array<SocialMediaPostModel>) => {
            data.forEach(post => {
                this.socialMediaStore.dispatch({ type: "ADDTOPEACH", payload: post });
            });
        });
    }
}