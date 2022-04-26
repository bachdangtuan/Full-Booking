import { history } from "../../App";
import { QLNguoiDungService }  from "../../Services/QuanLyNguoiDungService";
import { DANG_NHAP } from "./TypeAction/TypeActionQuanLyDangNhap";



export const dangNhapAction = (thongTinDangNhap) => {

    return async (dispatch) => {

        try {


            const result = await QLNguoiDungService.guiThongTinNguoiDung(thongTinDangNhap)

            console.log(result);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP,
                    thongTinDangNhap: result.data.content
                })
                history.goBack();
            }
        
        }
        catch (error) {
            console.log(error.response.data);
        }
    }
}