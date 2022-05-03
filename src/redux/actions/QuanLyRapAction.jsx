import { layDanhSachRap } from "../../Services/QuanLyRapService";
import { layThongTinLichChieu } from "../../Services/QuanLyRapService";
import { SET_CHI_TIET_PHIM, SET_RAP_PHIM } from "./TypeAction/TypeActionQuanLyRap";

export const layDanhSachRapAction = () =>{
    return async (dispatch) =>{
        try {
            const getAPI = await layDanhSachRap();
            //Đưa lên store
            dispatch({
                type: SET_RAP_PHIM,
                arrRapPhim: getAPI.data.content
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}

// Lấy lịch chiếu
export const layLichChieu = (id) =>{
    return async (dispatch) =>{
        try {
            const result = await layThongTinLichChieu(id);

            dispatch({
                type: SET_CHI_TIET_PHIM,
                filmDetail: result.data.content
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}