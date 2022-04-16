import { layDanhSachPhim } from "../../Services/QuanLyPhimService";
import { SET_DANH_SACH_PHIM } from "./TypeAction/TypeQuanLyPhim";


export const layDanhSachPhimAction = () =>{
    return async (dispatch) =>{
        try {
            const getAPI = await layDanhSachPhim();
    
            //Đưa lên store
            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrDSphim: getAPI.data.content
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}