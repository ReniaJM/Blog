import constans from "../constans/actionsTypes";

const initailSate= {
    news:[]
};

export default (state = initailSate, action) => {
    const updated = Object.assign({}, state);

    switch(action.type) {
        case constans.NEWS_RECEIVED:
            updated['news']= action.news;
            return updated;

        default:
            return state;

    }

}