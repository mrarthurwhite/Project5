import { combineReducers } from 'redux'
import wordsReducer from "./wordsReducer";
import wordReducer from "./wordReducer";

export default combineReducers({
    wordsReducer,
    wordReducer
})