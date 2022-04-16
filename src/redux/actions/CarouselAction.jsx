import { layDanhSachBanner } from "../../Services/QuanLyPhimService";
import { SET_CAROUSEL } from "./TypeAction/TypeActionCarousel";

export const GetAPICarousel = async (dispatch) => {
    try {
        const getAPI = await layDanhSachBanner();

        //Đưa lên store
        dispatch({
            type: SET_CAROUSEL,
            arrCarousel: getAPI.data.content
        })
    }
    catch (error) {
        console.log(error);
    }

};