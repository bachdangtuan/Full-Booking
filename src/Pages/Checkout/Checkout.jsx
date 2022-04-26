import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layChiTietPhongVeAction } from '../../redux/actions/QuanLyDatVeAction';

export default function Checkout(props) {

  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
  console.log(userLogin);



  const chiTietPhongVe = useSelector(state => state.QuanLyDatVeReducer)


  const dispatch = useDispatch();
  
  useEffect(() =>{
    console.log(props.match.params.id);


    const action = layChiTietPhongVeAction(props.match.params.id)
    dispatch(action)
  },[])

  console.log(chiTietPhongVe);


  return (
    <div className='container'>
      <div className='grid grid-cols-12'>
        <div className='col-span-8'>

        </div>
        <div className='col-span-4'>
          <h3 className='text-green-400 text-center'>0 đ</h3>
          <hr />
          <h3>Lật Mặt 48h</h3>
          <p>Địa Điểm:</p>
          <p>Ngày Chiếu</p>
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
