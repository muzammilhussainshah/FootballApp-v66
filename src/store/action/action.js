import ActionTypes from '../constant/constant';

import axios from "axios";
import moment from "moment/moment";


export const NowTV = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ActionTypes.LOADER, payload: true });
            let resp = await getResponse(`https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment().format('YYYY-MM-DD')}`)
            if (resp.status == 200) {
                dispatch({ type: ActionTypes.NOWTV, payload: resp?.data?.response.splice(0, 5) });
            } else {
                alert('some thing went wrong')
            }
            dispatch({ type: ActionTypes.LOADER, payload: false });
        }
        catch (err) {
            dispatch({ type: ActionTypes.LOADER, payload: false });
        }
    }
}


export const ThisWeek = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ActionTypes.LOADER, payload: true });
            var date = new Date();
            date.setDate(date.getDate() + 7);
            let resp = await getResponse(`https://api-football-v1.p.rapidapi.com/v3/fixtures?from=2022-12-10&to=2022-12-17&season=2022&league=1`)
            if (resp.status == 200) {
                dispatch({ type: ActionTypes.THISWEEK, payload: resp?.data?.response });
            } else {
                alert('some thing went wrong')
            }
            dispatch({ type: ActionTypes.LOADER, payload: false });
        }
        catch (err) {
            dispatch({ type: ActionTypes.LOADER, payload: false });
        }
    }
}

export const LiveAll = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ActionTypes.LOADER, payload: true });
            let resp = await getResponse(`https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all`)
            if (resp.status == 200) {
                dispatch({ type: ActionTypes.LIVESCORE, payload: resp?.data?.response });
            } else {
                alert('some thing went wrong')
            }
            dispatch({ type: ActionTypes.LOADER, payload: false });
        }
        catch (err) {
            dispatch({ type: ActionTypes.LOADER, payload: false });
        }
    }
}
//Preview
export const League = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ActionTypes.LOADER, payload: true });
            let resp = await getResponse(`https://api-football-v1.p.rapidapi.com/v3/leagues`)
            if (resp.status == 200) {
                dispatch({ type: ActionTypes.LEAGUES, payload: resp?.data?.response.splice(0, 5) });
            } else {
                alert('some thing went wrong')
            }
            dispatch({ type: ActionTypes.LOADER, payload: false });
        }
        catch (err) {
            dispatch({ type: ActionTypes.LOADER, payload: false });
        }
    }
}
export const Standings = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ActionTypes.LOADER, payload: true });
            let resp = await getResponse(`https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=39`)
            if (resp.status == 200) {
                dispatch({ type: ActionTypes.STANDINGS, payload: resp?.data?.response });
            } else {
                alert('some thing went wrong')
            }
            dispatch({ type: ActionTypes.LOADER, payload: false });
        }
        catch (err) {
            dispatch({ type: ActionTypes.LOADER, payload: false });
        }
    }
}
const getResponse = async (URL) => {
    try {
        const option = {
            method: 'GET',
            url: URL,
            headers: {
                'X-RapidAPI-Key': '333a6e9d17msh885d0fa8107a10bp149775jsn8302b5c9acf2',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            },
        };
        var resp = await axios(option);
        return resp
    }
    catch (err) {
    }
}