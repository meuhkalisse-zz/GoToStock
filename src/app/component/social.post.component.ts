import { Component, Inject } from '@angular/core';
import { Store } from '../store/store';
import { TopSocialMediaPostModel } from '../model/topSocialMediaPostModel';
import { SocialMediaPostModel } from '../model/socialMediaPostModel';
import { SocialMedia } from '../model/enums/socialMedia';
import { ISocialMediaPostService } from '../services/interface/socialMediaPostService';

@Component({
    selector: 'social-post',
    templateUrl: '../html/social.post.component.html',
    styleUrls: ['../css/social.post.component.css']
})

export class SocialPostComponent {

    public postCountEach:number = 2;
    public topPostCount: number = 2;
    public allTimePost: Array<SocialMediaPostModel> = [];
    public allTimePostEachMedia: Array<SocialMediaPostModel> = [];
    private unSubscribe: UnsubscribeCallback;

    constructor(@Inject('SocialMediaPostService') private socialMediaPostService: ISocialMediaPostService,
        @Inject('SocialMediaPostStore') private postStore: Store<TopSocialMediaPostModel>) {
        this.unSubscribe = this.postStore.subscribe(() => {
            this.allTimePost = this.postStore.getState().AllTimeTopPost;
            this.allTimePostEachMedia = this.postStore.getState().TopPostEachMedia;
        })
    }

    public getAllTimePost() {
        this.socialMediaPostService.getTopNSocialMediaPost(this.topPostCount);
    }

    public getTopForEachMedia() {
        this.socialMediaPostService.getTopNSocialMediaPostForEachSocialMedia(this.postCountEach);
    }

    public getSocialMediaImageUrl(media: SocialMedia): string {
        switch (media) {
            case SocialMedia.Facebook:
                return "fab fa-facebook";
            case SocialMedia.GooglePlus:
                return "fab fa-google-plus-square";
            case SocialMedia.Instagram:
                return "fab fa-instagram";
            case SocialMedia.Tumblr:
                return "fab fa-tumblr";
            case SocialMedia.Twitter:
                return "fab fa-twitter";
            default:
                return "fas fa-question-square";
        }
    }


}
