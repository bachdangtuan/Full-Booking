import axios from "axios";
import { DOMAIN } from "../../util/settings/config";
import { SET_CAROUSEL } from "./TypeAction/TypeActionCarousel";


export const GetAPICarousel = async (dispatch) => {
    try {
        const getAPI = await axios({
            url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
            method: 'GET'
        })
        console.log(getAPI);

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