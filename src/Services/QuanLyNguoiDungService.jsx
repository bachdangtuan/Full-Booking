import { baseService } from "./baseService";


export class QuanLyNguoiDungService extends baseService {

    constructor() {
        super();
    }
    // lấy thông tin người dùng
    guiThongTinNguoiDung = (thongTinDangNhap) =>{
        return this.post('/api/QuanLyNguoiDung/DangNhap',thongTinDangNhap )
    }


    //lịch sử đặt vé
    layLichSuDatVe = () =>{
        return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan')
    }
}

export const QLNguoiDungService = new QuanLyNguoiDungService()