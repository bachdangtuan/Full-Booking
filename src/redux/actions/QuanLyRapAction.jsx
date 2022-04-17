
import { layDanhSachRap } from "../../Services/QuanLyRapService";
import { SET_RAP_PHIM } from "./TypeAction/TypeActionQuanLyRap";




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