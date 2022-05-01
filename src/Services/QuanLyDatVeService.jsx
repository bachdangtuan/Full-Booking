import { ThongTinDatVe } from "../model/ThongTinDatVe";
import { baseService } from "./baseService";


export class QuanLyDatVeService extends baseService {

    constructor() {
        super();
    }


    layChiTietPhongVe = (maLichChieu) =>{ //mã lịch chiếu lấy từ param.match.id
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }

    guiThongTindatVe = (thongTinDatVe = new ThongTinDatVe()) => {
        return this.post('/api/QuanLyDatVe/DatVe',thongTinDatVe)
    }


}

const QLDatVeService = new QuanLyDatVeService();
export const {layChiTietPhongVe} = QLDatVeService;
export const {guiThongTindatVe} = QLDatVeService;