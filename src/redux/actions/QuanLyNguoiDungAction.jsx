import { history } from "../../App";
import { QLNguoiDungService }  from "../../Services/QuanLyNguoiDungService";
import { DANG_NHAP, SET_THONG_TIN_NGUOI_DUNG, THONG_BAO_DANG_NHAP } from "./TypeAction/TypeActionQuanLyDangNhap";



export const dangNhapAction = (thongTinDangNhap) => {

    return async (dispatch) => {

        try {


            const result = await QLNguoiDungService.guiThongTinNguoiDung(thongTinDangNhap)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP,
                    thongTinDangNhap: result.data.content
                })
                history.goBack();
            }
        
        }
        catch (error) {
            dispatch({
                type: THONG_BAO_DANG_NHAP,
                guiThongTinDangNhap: error.response.data
            })
        }
    }
}


export const layThongTinNguoiDungAction = () => {

    return async (dispatch) => {

        try {
            const result = await QLNguoiDungService.layLichSuDatVe();

            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                })
  
            }
        }
        catch (error) {
            console.log(error.response.data);
        }
    }
}