import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { DANG_NHAP } from "../actions/TypeAction/TypeActionQuanLyDangNhap";

//Lưu thông tin đăng nhập lấy từ store

let login = {};
if (localStorage.getItem(USER_LOGIN)) {
    login = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const stateDefault = {
    userLogin: login
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DANG_NHAP:{
            const {thongTinDangNhap} =action


            
            localStorage.setItem(TOKEN, (thongTinDangNhap.accessToken))
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap))
            return {...state, userLogin:thongTinDangNhap}
        }
        default: return { ...state }
        
    }
}
