import { ThongTinDatVe } from "../../model/ThongTinDatVe";
import { layChiTietPhongVe } from "../../Services/QuanLyDatVeService";
import { DAT_VE_HOAN_TAT, DISPLAY_LOADING, HIDE_LOADING, SET_CHI_TIET_PHONG_VE } from "./TypeAction/TypeActionQuanLyDatVe";
import { guiThongTindatVe } from "../../Services/QuanLyDatVeService";




export const layChiTietPhongVeAction = (maLichChieu) => {

    return async (dispatch) => {
        try {
            const result = await layChiTietPhongVe(maLichChieu)
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


            dispatch({
                type: DISPLAY_LOADING
            })


            const result = await guiThongTindatVe(thongTinDatVe);
            console.log(result.data.content);


            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));

            await dispatch({
                type : DAT_VE_HOAN_TAT
            })


            dispatch({
                type: HIDE_LOADING
            })
        }
        catch (error) {
            dispatch({
                type: HIDE_LOADING
            })
            console.log(error.response?.data);
        }
    }

}