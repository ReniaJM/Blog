import constans from "../constans/actionsTypes";

const initailSate= {
    news:[],
    newsItem:{}
};

export default (state = initailSate, action) => {
    const updated = Object.assign({}, state);

    switch(action.type) {
        case constans.NEWS_RECEIVED:
            updated['news']= action.news;
            return updated;

        case constans.NEWSITEM_RECEIVED:
            updated['newsItem']= action.newsItem;
            return updated;

        default:
            return state;

    }

}