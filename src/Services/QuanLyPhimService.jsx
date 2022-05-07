import { baseService } from "./baseService";


export class QuanLyPhimService extends baseService {

    constructor() {
        super();
    }
    // lấy danh sách banner
    layDanhSachBanner = () =>{
        return this.get('/api/QuanLyPhim/LayDanhSachBanner')
    }
    // lấy danh sách phim
    layDanhSachPhim = () =>{
        return this.get('/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02')
    }

}

const QLPhimService  = new QuanLyPhimService();
export const {layDanhSachBanner} = QLPhimService;
export const {layDanhSachPhim} = QLPhimService;