import ActionTypes from '../constant/constant';

import axios from "axios";
import moment from "moment/moment";
import store from '..';


export const NowTV = (date) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ActionTypes.LOADER, payload: true });
            var date = date ? date : new Date();
            let resp = await getResponse(`https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${moment(date).format('YYYY-MM-DD')}`)
            console.log(resp, 'respresprespresp')
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
            let resp = await getResponse(`https://api-football-v1.p.rapidapi.com/v3/fixtures?from=${moment(new Date()).format('YYYY-MM-DD')}&to=${moment(date).format('YYYY-MM-DD')}&season=2022&league=325`)
            if (resp.status == 200) dispatch({ type: ActionTypes.THISWEEK, payload: resp?.data?.response });
            else alert('some thing went wrong')
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
                console.log(resp, 'LiveAll')
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

export const League = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ActionTypes.LOADER, payload: true });
            let resp = await getResponse(`https://api-football-v1.p.rapidapi.com/v3/leagues`)
            let allLeagues = resp?.data?.response;
            console.log(allLeagues, 'resp from League')

            const Premier = allLeagues.filter(item => item.league.name.indexOf('Premier League') !== -1);
            const SerieA = allLeagues.filter(item => item.league.name.indexOf('Serie A') !== -1);
            const Bundesliga = allLeagues.filter(item => item.league.name.indexOf('Bundesliga') !== -1);
            const Ligue1 = allLeagues.filter(item => item.league.name.indexOf('Ligue 1') !== -1);
            const Euro = allLeagues.filter(item => item.league.name.indexOf('Euro Championship') !== -1);

            var famousLeagues = [Premier, SerieA, Bundesliga, Ligue1, Euro]

            console.log(famousLeagues, 'famousLeaguesfamousLeagues'); // [1, 2, "x", "y"];
            // console.log(famousLeagues,'famousLeagues')


            if (resp.status == 200) dispatch({ type: ActionTypes.LEAGUES, payload: famousLeagues });
            else alert('some thing went wrong')
            dispatch({ type: ActionTypes.LOADER, payload: false });
        }
        catch (err) {
            dispatch({ type: ActionTypes.LOADER, payload: false });
        }
    }
}

export const Standings = (season, league) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ActionTypes.LOADER, payload: true });
            let resp = await getResponse(`https://api-football-v1.p.rapidapi.com/v3/standings?season=${season}&league=${league}`)
            let currentStandings = store?.getState()?.root?.standings
            let alreadyHave = currentStandings.indexOf(resp?.data?.response[0].league.id)
            if (alreadyHave == -1) currentStandings.push(resp?.data?.response[0].league)
            if (resp.status == 200) dispatch({ type: ActionTypes.STANDINGS, payload: currentStandings });
            else alert('some thing went wrong')
            dispatch({ type: ActionTypes.LOADER, payload: false });
        }
        catch (err) {
            dispatch({ type: ActionTypes.LOADER, payload: false });
        }
    }
}
export const News = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: ActionTypes.LOADER, payload: true });
            let resp = await getResponse(`https://newsapi.org/v2/everything?q=Football&from=${moment(new Date()).format('YYYY-MM-DD')}&sortBy=popularity&apiKey=bc00eaa1853b49269c856e9b63f2b408`)
            console.log(resp, 'asdasd')
            if (resp.status == 200) dispatch({ type: ActionTypes.NEWS, payload: resp?.data?.articles.splice(0, 5) });
            else alert('some thing went wrong')

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
        console.log(err, 'errerrerrerr')
    }
}