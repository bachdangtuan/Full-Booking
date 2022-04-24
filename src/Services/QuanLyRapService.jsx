import { baseService } from "./baseService";


export class QuanLyRapService extends baseService {

    constructor() {
        super();
    }
    // lấy danh sách phim
    layDanhSachRap = () =>{
        return this.get('/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03')
    }
    //lấy thông tin lịch chiếu phim
    layThongTinLichChieu = (maPhim) =>{
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }
}

 const QLRapService  = new QuanLyRapService();
 export const {layDanhSachRap} = QLRapService;
 export const {layThongTinLichChieu} = QLRapService;