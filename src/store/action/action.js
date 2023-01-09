// import firestore from '@react-native-firebase/firestore';
// import { Alert } from 'react-native';
// import { firebase } from '@react-native-firebase/auth';
import ActionTypes from '../constant/constant';

import axios from "axios";
import moment from "moment/moment";


export const NowTV = () => {
    return async (dispatch) => {
        console.log(moment().format('YYYY-MM-DD'), 'resprespresprespresp')
        try {
            const option = {
                method: 'GET',
                url: `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment().format('YYYY-MM-DD')}`,
                headers: {
                    'X-RapidAPI-Key': '333a6e9d17msh885d0fa8107a10bp149775jsn8302b5c9acf2',
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
                },
            };
            var resp = await axios(option);
            if (resp.status == 200) {
                dispatch({ type: ActionTypes.NOWTV, payload: resp?.data?.response.splice(0, 5) });
            } else {
                alert('some thing went wrong')
            }
        }
        catch (err) {
        }
    }
}


export const ThisWeek = () => {
    return async (dispatch) => {
        try {
            const option = {
                method: 'GET',
                url: `https://api-football-v1.p.rapidapi.com/v3/fixtures?from=2022-12-10&to=2022-12-17&season=2022&league=1`,
                headers: {
                    'X-RapidAPI-Key': '333a6e9d17msh885d0fa8107a10bp149775jsn8302b5c9acf2',
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
                },
            };
            var resp = await axios(option);
            if (resp.status == 200) {
                console.log(resp, '123312123132132')
                dispatch({ type: ActionTypes.THISWEEK, payload: resp?.data?.response });
            } else {
                alert('some thing went wrong')
            }
        }
        catch (err) {
        }
    }
}

export const LiveAll = () => {
    return async (dispatch) => {
        try {
            const option = {
                method: 'GET',
                url: `https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all`,
                headers: {
                    'X-RapidAPI-Key': '333a6e9d17msh885d0fa8107a10bp149775jsn8302b5c9acf2',
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
                },
            };
            var resp = await axios(option);
            if (resp.status == 200) {
                console.log(resp, '123312123132132')
                // dispatch({ type: ActionTypes.THISWEEK, payload: resp?.data?.response.splice(0, 5) });
            } else {
                alert('some thing went wrong')
            }
        }
        catch (err) {
        }
    }
}
//Preview
export const League = () => {
    return async (dispatch) => {
        try {
            const option = {
                method: 'GET',
                url: `https://api-football-v1.p.rapidapi.com/v3/leagues`,
                headers: {
                    'X-RapidAPI-Key': '333a6e9d17msh885d0fa8107a10bp149775jsn8302b5c9acf2',
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
                },
            };
            var resp = await axios(option);
            if (resp.status == 200) {
                console.log(resp, '123312123132132')
                // dispatch({ type: ActionTypes.THISWEEK, payload: resp?.data?.response.splice(0, 5) });
            } else {
                alert('some thing went wrong')
            }
        }
        catch (err) {
        }
    }
}
export const Standings = () => {
    return async (dispatch) => {
        try {
            const option = {
                method: 'GET',
                url: `https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=39`,
                headers: {
                    'X-RapidAPI-Key': '333a6e9d17msh885d0fa8107a10bp149775jsn8302b5c9acf2',
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
                },
            };
            var resp = await axios(option);
            if (resp.status == 200) {
                console.log(resp, '123312123132132')
                // dispatch({ type: ActionTypes.THISWEEK, payload: resp?.data?.response.splice(0, 5) });
            } else {
                alert('some thing went wrong')
            }
        }
        catch (err) {
        }
    }
}