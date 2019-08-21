import actionsTypes from "../constans/actionsTypes";

export function receivedNews(news) {
    return {
        type:actionsTypes.NEWS_RECEIVED,
        news:news
    }
}

export function newItemReceived(newsItem) {
    return {
        type:actionsTypes.NEWSITEM_RECEIVED,
        newsItem:newsItem
    }
}

// export function fetchNews(fakenews) {
//     return dispatch => {
//         dispatch(receivedNews(fakenews))
//     }
// }

export function fetchNewsItem(itemfakenews) {
    return dispatch => {
        dispatch(newItemReceived(itemfakenews))
    }
}

export function fetchNews(fakeNews){
    console.log('presend')
    return dispatch => {
        return fetch(`http://localhost:5000/news`)
            .then( (response) =>{
                console.log(response);
            });
    }
}








