import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layChiTietPhongVeAction } from '../../redux/actions/QuanLyDatVeAction';
import { DAT_GHE } from '../../redux/actions/TypeAction/TypeActionQuanLyDatVe';
import style from '../Checkout/Checkout.module.css'

export default function Checkout(props) {
  const dispatch = useDispatch();

  // Thông Tin User Login
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)


  //Chi Tiết phòng vé
  const { chiTietPhongVe, danhSachGheDat } = useSelector(state => state.QuanLyDatVeReducer)
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

  //Danh Sách đặt ghế
  console.log(danhSachGheDat);


  useEffect(() => {
    console.log(props.match.params.id);
    const action = layChiTietPhongVeAction(props.match.params.id)
    dispatch(action)
  }, [])


  const renderGhe = () => {
    return danhSachGhe?.map((ghe, index) => {
      const classGheVip = (ghe.loaiGhe === 'Vip' ? 'gheVip' : '');
      const classDaDat = (ghe.daDat === true ? 'gheDaDat' : '');

      let classDangDat = '';
      let indexDD = danhSachGheDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
      if (indexDD != -1) {
        classDangDat = 'gheDangDat';
      }

      return <Fragment key={index}>
        <button
          onClick={() => {
            dispatch({
              type: DAT_GHE,
              gheDuocChon: ghe
            })
          }
          }
          disabled={ghe.daDat} className={`${style['ghe']} ${style[classGheVip]} ${style[classDaDat]} ${style[classDangDat]} cursor-pointer`}>
          {ghe.stt}
        </button>
        {(index + 1) % 16 === 0 ? <br /> : ''}
      </Fragment>
    })
  }

  const renderGheDat = () => {
    return danhSachGheDat.map((sp, index) => {
      return <span key={index} className='ml-3'>{sp.tenGhe}</span>
    })
  }



  const tinhTienVe = () => {
    let tongGia = 0;
    for (let i = 0; i < danhSachGheDat.length; i++) {
      let gia = danhSachGhe[i].giaVe
      tongGia += gia
    }
    return <span>{tongGia.toLocaleString()}</span>
  }

  return (
    <div className='container pt-10'>
      <div className='grid grid-cols-12'>
        <div className='col-span-9 m-auto'>
          <h1 className='text-center'>GHẾ </h1>
          {renderGhe()}
        </div>
        <div className='col-span-3'>
          <h3 className='text-green-400 text-center'>{tinhTienVe()} đ</h3>
          <hr />
          <h3>{thongTinPhim?.tenPhim}</h3>
          <p>Địa Điểm:{thongTinPhim?.diaChi}</p>
          <p>Ngày Chiếu: {thongTinPhim?.ngayChieu}</p>
          <hr />
          <div className='break-words'>Ghế {renderGheDat()} </div>
          <p>Tính Tiền: {tinhTienVe()} </p>
          <hr />
          <h3>Email: {userLogin.email} </h3>
          <hr />
          <h3>Số Điện Thoại: {userLogin.soDT}</h3>
          <div className='mb-0 flex flex-col justify-end items-center'>
            <div className='bg-green-500 text-white w-full text-center font-bold cursor-pointer'>
              Đặt Vé
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
