import actionsTypes from "../constans/actionsTypes";

function receivedNews(news) {
     return {
         type:actionsTypes.NEWS_RECEIVED,
         news:news
     }
}

