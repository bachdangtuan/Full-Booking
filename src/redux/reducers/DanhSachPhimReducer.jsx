import { SET_CHI_TIET_PHIM } from "../actions/TypeAction/TypeActionQuanLyRap";
import { SET_PHIM_DANG_CHIEU , SET_PHIM_SAP_CHIEU , SET_DANH_SACH_PHIM } from "../actions/TypeAction/TypeQuanLyPhim";



const stateDefault = {
    arrDSphim: [
        {
            "maPhim": 1282,
            "tenPhim": "Ban tay diet quy",
            "biDanh": "ban-tay-diet-quy",
            "trailer": "https://www.youtube.com/embed/uqJ9u7GSaYM",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
            "moTa": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        }
    ],
    // dangChieu: true,
    // sapChieu: false,
    arrDSphimDefault: [],
    filmDetail : {},
    phimModal:{}
}


export const DanhSachPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_PHIM: {
            state.arrDSphim = action.arrDSphim;

            state.arrDSphimDefault = state.arrDSphim;
            return { ...state }
        }
        case SET_PHIM_DANG_CHIEU: {
            // state.dangChieu = !state.dangChieu;
            
            state.arrDSphim = state.arrDSphimDefault.filter(film => film.dangChieu === true );
            console.log('Phim Dang Chieu', state.arrDSphim);
            return { ...state }
            
        }
        case SET_PHIM_SAP_CHIEU: {
            // state.sapChieu = !state.sapChieu;

            state.arrDSphim = state.arrDSphimDefault.filter(film => film.sapChieu === true );

            return { ...state }
        }

        case SET_CHI_TIET_PHIM:{
            state.filmDetail = action.filmDetail;
            return { ...state }
        }

        case 'SET_MODAL_PHIM':{

            state.phimModal = action.phim
            return { ...state }
        }

        default: return { ...state }
    }
}

