import {combineReducers} from 'redux'
import {typingReducer} from './typingReducer'


export const rootReducer = combineReducers({
    typing: typingReducer
})