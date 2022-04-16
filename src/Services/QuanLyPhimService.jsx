import { baseService } from "./baseService";


export class QuanLyPhimService extends baseService {

    constructor() {
        super();
    }
    layDanhSachBanner = () =>{
        return this.get('/api/QuanLyPhim/LayDanhSachBanner')
    }

}

const QLPhimService  = new QuanLyPhimService();
export const {layDanhSachBanner} = QLPhimService;