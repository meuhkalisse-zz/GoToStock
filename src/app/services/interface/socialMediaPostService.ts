export interface ISocialMediaPostService{
    getTopNSocialMediaPost(count: number);
    getTopNSocialMediaPostForEachSocialMedia(count: number);
}