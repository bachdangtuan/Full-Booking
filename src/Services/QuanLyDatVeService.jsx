import { baseService } from "./baseService";


export class QuanLyDatVeService extends baseService {

    constructor() {
        super();
    }


    layChiTietPhongVe = (maLichChieu) =>{ //mã lịch chiếu lấy từ param.match.id
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
}

const QLDatVeService = new QuanLyDatVeService();
export const {layChiTietPhongVe} = QLDatVeService;