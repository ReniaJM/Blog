import actionsTypes from "../constans/actionsTypes";

export function receivedNews(news) {
    return {
        type:actionsTypes.NEWS_RECEIVED,
        news:news
    }
}

export function fetchNews(fakenews) {
    return dispatch =>{
        dispatch(receivedNews(fakenews))
    }
}

