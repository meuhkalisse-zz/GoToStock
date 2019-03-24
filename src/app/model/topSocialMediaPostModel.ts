import { SocialMediaPostModel } from './socialMediaPostModel';

export class TopSocialMediaPostModel{
    constructor(){
        this.AllTimeTopPost = [];
        this.TopPostEachMedia = [];
    }
    AllTimeTopPost: Array<SocialMediaPostModel>;
    TopPostEachMedia: Array<SocialMediaPostModel>;
}