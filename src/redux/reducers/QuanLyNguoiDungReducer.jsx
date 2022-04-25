import { DANG_NHAP } from "../actions/TypeAction/TypeActionQuanLyDangNhap";

const stateDefault = {
    userLogin: {}

}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {

        default: return { ...state }
        
    }
}
