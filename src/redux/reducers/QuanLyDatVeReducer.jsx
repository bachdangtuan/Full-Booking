import { DAT_GHE, SET_CHI_TIET_PHONG_VE } from "../actions/TypeAction/TypeActionQuanLyDatVe"

const stateDefault = {
    chiTietPhongVe: {},


    danhSachGheDat: [
        // {
        //     "maGhe": 47427,
        //     "tenGhe": "27",
        //     "maRap": 451,
        //     "loaiGhe": "Thuong",
        //     "stt": "27",
        //     "giaVe": 100000,
        //     "daDat": false,
        //     "taiKhoanNguoiDat": null
        // }
    ]
}

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe
            return { ...state }
        }

        case DAT_GHE: {
            const danhSachGheDatUpdate = [...state.danhSachGheDat]

            console.log("action", action.gheDuocChon.tenGhe);
            let maGheChon = action.gheDuocChon.maGhe
            let index = danhSachGheDatUpdate.findIndex(gheDD => gheDD.maGhe === maGheChon)

            if (index != -1) {
                danhSachGheDatUpdate.splice(index, 1)
                state.danhSachGheDat = danhSachGheDatUpdate;
            } else {
                danhSachGheDatUpdate.push(action.gheDuocChon)
                state.danhSachGheDat = danhSachGheDatUpdate;
            }
            console.log(index);
            //Click lần 2 thì xóa   

            console.log("danhSachGheDatUpdate", danhSachGheDatUpdate);

            return { ...state }
        }


        default: return { ...state }
    }
}

