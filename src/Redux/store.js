import rootReducer from "./reducer";
import {legacy_createStore,applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {reducer} from '../Redux/productReducer/reducer'
const mainReducer = combineReducers({
    rootReducer,
    reducer
})

export const store = legacy_createStore(mainReducer,applyMiddleware(thunk))