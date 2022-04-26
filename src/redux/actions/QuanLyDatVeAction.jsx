import { layChiTietPhongVe } from "../../Services/QuanLyDatVeService";
import { SET_CHI_TIET_PHONG_VE } from "./TypeAction/TypeActionQuanLyDatVe";




export const layChiTietPhongVeAction = (maLichChieu) => {

    return async (dispatch) => {
        try {
            const result = await layChiTietPhongVe(maLichChieu)
            console.log('result', result);
            if (result.status === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe:result.data.content
                })
            }

        }
        catch (error) {
            console.log(error.response?.data);
        }
    }
}