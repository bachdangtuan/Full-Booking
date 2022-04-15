import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducers/CarouselReducer';

const rootReducer = combineReducers({
    //State Ứng Dụng
    CarouselReducer
    
})

export const store = createStore(rootReducer,applyMiddleware(thunk));



