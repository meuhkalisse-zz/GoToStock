import { ISocialMediaPostProvider } from './interface/socialMediaPostProvider';
import { Observable } from 'rxjs';
import { SocialMediaPostModel } from '../model/socialMediaPostModel';
import { SocialMedia } from '../model/enums/socialMedia';

export class MockSocialMediaPostProvider implements ISocialMediaPostProvider{
    constructor(){}

    public getTopNSocialMediaPost(count: number): Observable<Array<SocialMediaPostModel>>{
        let values = [];
        for (let i = 0; i < count; i++) {
            values.push(this.getRandomPost(null));
        }
        return Observable.create(observer => {
            observer.next(values);
            observer.complete();
        });
    }
    public getTopNSocialMediaPostForEachSocialMedia(count: number) : Observable<Array<SocialMediaPostModel>>{
        let values = []
        Object.keys(SocialMedia).forEach(media => {
            for (let i = 0; i < count; i++) {
                values.push(this.getRandomPost(media));
            }
        });
        return Observable.create(observer => {
            observer.next(values);
            observer.complete();
        });
    }

    private getRandomPost(media: string): SocialMediaPostModel{
        let model = new SocialMediaPostModel();
        model.From = SocialMedia[media === null ? this.getRandomSocialMedia() : media];
        model.PostedOn = new Date();
        model.Text = "Never gonna give you up";
        model.WrittenBy = "Rick Astley"
        return model;
    }

    private getRandomSocialMedia(): string {
        var len = (Object.keys(SocialMedia).length);
        var rnd = (Math.floor(Math.random() * len)); 
        let socialMedia;
        let i = 0;
        Object.keys(SocialMedia).forEach(media => {
            if(i === rnd)
                socialMedia = media;
            i++;
        });
        return socialMedia;
    }
}