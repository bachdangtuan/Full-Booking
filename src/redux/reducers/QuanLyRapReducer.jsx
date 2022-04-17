import { SET_RAP_PHIM } from "../actions/TypeAction/TypeActionQuanLyRap"


const stateDefault = {
    arrRapPhim: []

}

export const QuanLyRapReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_RAP_PHIM :{
            state.arrRapPhim = action.arrRapPhim;
        }
        
        default: return { ...state }

    }
}

