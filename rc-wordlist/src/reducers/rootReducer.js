import { combineReducers } from 'redux'
import wordsReducer from "./wordsReducer";
import activeWordReducer from "./activeWordReducer";
import fetchAWordReducer from "./fetchAWordReducer";

export default combineReducers({
    wordsReducer
    ,
    activeWordReducer
    ,
    fetchAWordReducer
})