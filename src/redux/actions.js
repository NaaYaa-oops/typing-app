import axios from 'axios'
import {CHAR_PER_MINUTE, FETCH_WORDS, PRESSED_BUTTON, SET_ACCURACY, SET_TYPOS} from './types'


const URL = process.env.REACT_APP_DB_URL

export function fetchingWords() {
    return dispatch => {
        const fetching = async () => {
            return await axios.get(`${URL}/words.json`).then(resp => Object.keys(resp.data).map(key => resp.data[key]))
                .then(response => response[0].main)
        }
        fetching().then(data => dispatch({type: FETCH_WORDS, payload: data}))
    }
}

export function charPerMinute(count) {
    return {
        type: CHAR_PER_MINUTE,
        payload: count
    }
}

export function setAccuracy(acc) {
    return {
        type: SET_ACCURACY,
        payload: acc
    }
}

export function setTypos(typos) {
    return {
        type: SET_TYPOS,
        payload: typos
    }
}

export function pressedButton(btn) {
    return {
        type: PRESSED_BUTTON,
        payload: btn
    }
}