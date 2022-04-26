import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducers/CarouselReducer';
import { DanhSachPhimReducer } from './reducers/DanhSachPhimReducer';
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer';
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer';
import {QuanLyDatVeReducer} from './reducers/QuanLyDatVeReducer'



const rootReducer = combineReducers({
    //State Ứng Dụng
    CarouselReducer,
    DanhSachPhimReducer,
    QuanLyRapReducer,
    QuanLyNguoiDungReducer,
    QuanLyDatVeReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));



