import { ThongTinDatVe } from "../../model/ThongTinDatVe";
import { layChiTietPhongVe } from "../../Services/QuanLyDatVeService";
import { SET_CHI_TIET_PHONG_VE } from "./TypeAction/TypeActionQuanLyDatVe";
import { guiThongTindatVe } from "../../Services/QuanLyDatVeService";



export const layChiTietPhongVeAction = (maLichChieu) => {

    return async (dispatch) => {
        try {
            const result = await layChiTietPhongVe(maLichChieu)
            console.log('result', result);
            if (result.status === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
            }

        }
        catch (error) {
            console.log(error.response?.data);
        }
    }
}


export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async (dispatch) => {
        try {
            const result = await guiThongTindatVe(thongTinDatVe);
            console.log(result.data.content);
        }
        catch (error) {
            console.log(error.response?.data);
        }
    }

}