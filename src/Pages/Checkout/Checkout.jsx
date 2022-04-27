import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layChiTietPhongVeAction } from '../../redux/actions/QuanLyDatVeAction';
import style from '../Checkout/Checkout.module.css'


export default function Checkout(props) {

  // Thông Tin User Login
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
  console.log(userLogin);


  // Thông Tin Phim
  const { chiTietPhongVe } = useSelector(state => state.QuanLyDatVeReducer)
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

  //Get API
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(props.match.params.id);


    const action = layChiTietPhongVeAction(props.match.params.id)
    dispatch(action)
  }, [])

  console.log('check', { chiTietPhongVe });
  console.log(thongTinPhim);

  const renderGhe = () => {
    return danhSachGhe?.map((sp, index) => {
      return <Fragment key={index}>
        {sp.loaiGhe === 'Vip' ? <button className={`${style['ghe']} ${style['gheVip']}`}>{sp.stt}</button> :
          <button className={`${style['ghe']}`}>{sp.stt}</button>}
          {(index+1)%16 === 0 ? <br/>:''}

      </Fragment>


    })
  }


  return (
    <div className='container px-10 m-auto pt-20'>
      <h1 className='text-center'>ĐẶT GHẾ XEM PHIM</h1>
      <div className='grid grid-cols-12'>
        <div className='col-span-9'>
          {renderGhe()}
        </div>
        <div className='col-span-3'>
          <h3 className='text-green-400 text-center'>0 đ</h3>
          <hr />
          <h3>Tên Phim:{thongTinPhim?.tenPhim}</h3>
          <p>Địa Điểm:{thongTinPhim?.diaChi} </p>
          <p>Ngày Chiếu: {thongTinPhim?.ngayChieu}</p>
          <hr />
          <p>Ghế</p>
          <p>0đ</p>
          <hr />
          <h3>Email: {userLogin.email} </h3>
          <hr />
          <h3>Số Điện Thoại: {userLogin.soDT}</h3>
          <div className='mb-0 flex flex-col justify-end items-center'>
            <div className='bg-green-500 text-white w-full text-center font-bold'>
              Đặt Vé
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
