import { TopSocialMediaPostModel } from 'src/app/model/topSocialMediaPostModel';

const initialState: TopSocialMediaPostModel = new TopSocialMediaPostModel();

let socialMediaTopPostReducer: Reducer<TopSocialMediaPostModel> = (state: TopSocialMediaPostModel, action: Action) => {
    if(!state)
        state= initialState;
    if (action.type === 'ADDALLTIME'){
        state.AllTimeTopPost.push(action.payload);
    }else if(action.type === 'ADDTOPEACH'){
        state.TopPostEachMedia.push(action.payload);
    }else if(action.type === 'CLEARTOPEACH'){
        state.TopPostEachMedia = [];
    }else if(action.type === 'CLEARALLTIME'){
        state.AllTimeTopPost = [];
    }
    return {...state};
}

export default socialMediaTopPostReducer;
