import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    nowTv: [],
    thisWeek: [],
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
        default:
            return state;
    }

}