import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducers/CarouselReducer';
import { DanhSachPhimReducer } from './reducers/DanhSachPhimReducer';
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer';

const rootReducer = combineReducers({
    //State Ứng Dụng
    CarouselReducer,
    DanhSachPhimReducer,
    QuanLyRapReducer

})

export const store = createStore(rootReducer,applyMiddleware(thunk));



