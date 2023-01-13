import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    nowTv: [],
    thisWeek: [],
    liveScore: [],
    leagues: [],
    standings: [],
    loader: false,
    news: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.NOWTV:
            return ({
                ...state,
                nowTv: action.payload
            })
        case ActionTypes.THISWEEK:
            return ({
                ...state,
                thisWeek: action.payload
            })
        case ActionTypes.LIVESCORE:
            return ({
                ...state,
                liveScore: action.payload
            })
        case ActionTypes.LEAGUES:
            return ({
                ...state,
                leagues: action.payload
            })
        case ActionTypes.STANDINGS:
            return ({
                ...state,
                standings: action.payload
            })
        case ActionTypes.LOADER:
            return ({
                ...state,
                loader: action.payload
            })
        case ActionTypes.NEWS:
            return ({
                ...state,
                news: action.payload
            })
        default:
            return state;
    }

}