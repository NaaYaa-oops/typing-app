import {CHAR_PER_MINUTE, FETCH_WORDS, SET_ACCURACY, SET_TYPOS} from './types'


const initialState = {
    typingWords: '',
    charCount: 0,
    accuracy: 0,
    typos: 0
}

export function typingReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_WORDS:
            return {...state, typingWords: action.payload}
        case CHAR_PER_MINUTE:
            return {...state, charCount: action.payload}
        case SET_ACCURACY:
            return {...state, accuracy: action.payload}
        case SET_TYPOS:
            return {...state, typos: action.payload}
        default:
            return state
    }
}