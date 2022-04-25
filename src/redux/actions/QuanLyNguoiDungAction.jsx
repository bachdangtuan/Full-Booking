import { QLNguoiDungService }  from "../../Services/QuanLyNguoiDungService";
import { DANG_NHAP } from "./TypeAction/TypeActionQuanLyDangNhap";



export const dangNhapAction = (thongTinDangNhap) => {

    return async (dispatch) => {

        try {


            const result = await QLNguoiDungService.guiThongTinNguoiDung(thongTinDangNhap)


           

            
            console.log(result);
        }
        catch (error) {
            console.log(error.response.data);
        }
    }
}