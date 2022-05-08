import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { DANG_NHAP, SET_THONG_TIN_NGUOI_DUNG, THONG_BAO_DANG_NHAP } from "../actions/TypeAction/TypeActionQuanLyDangNhap";

//Lưu thông tin đăng nhập lấy từ store

let login = {
    taiKhoan: "",

};
if (localStorage.getItem(USER_LOGIN)) {
    login = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin: login,
    

    thongTinNguoiDung: {

    },
    thongTiNDangNhap: {
  
    }

}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DANG_NHAP:{
            const {thongTinDangNhap} =action
            
            localStorage.setItem(TOKEN, (thongTinDangNhap.accessToken))
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap))
            return {...state, userLogin:thongTinDangNhap}
        }


        case SET_THONG_TIN_NGUOI_DUNG: {
            

            state.thongTinNguoiDung = action.thongTinNguoiDung

            return {...state}
        }

        case THONG_BAO_DANG_NHAP: {
            state.thongTiNDangNhap = action.guiThongTinDangNhap

            return {...state}
        }


        default: return { ...state }
        
    }
}
