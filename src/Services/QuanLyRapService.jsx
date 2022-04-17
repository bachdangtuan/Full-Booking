import { baseService } from "./baseService";


export class QuanLyRapService extends baseService {

    constructor() {
        super();
    }
    // lấy danh sách phim
    layDanhSachRap = () =>{
        return this.get('/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03')
    }

}

 const QLRapService  = new QuanLyRapService();
 export const {layDanhSachRap} = QLRapService;