import React, { Fragment, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThongTinDatVe } from '../../model/ThongTinDatVe';
import { datVeAction, layChiTietPhongVeAction } from '../../redux/actions/QuanLyDatVeAction';
import { DAT_GHE } from '../../redux/actions/TypeAction/TypeActionQuanLyDatVe';
import style from '../Checkout/Checkout.module.css'
import '../Checkout/Checkout.css'
import { Tabs } from 'antd';
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';
import moment from 'moment';
import _ from 'lodash';



const { TabPane } = Tabs;

function callback(key) {
}

const Demo = (props) => {
  const dispatch = useDispatch();


  useEffect(() => {
    const action = layChiTietPhongVeAction(props.match.params.id)
    dispatch(action)
    const action2 = layThongTinNguoiDungAction()
    dispatch(action2)

  }, [])


  const thongTinNguoiDung = useSelector(state => state.QuanLyNguoiDungReducer.thongTinNguoiDung)

  return (
    <div className='p-5'>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="CHỌN GHẾ VÀ THANH TOÁN" key="1">
          {/* <Checkout {...props} /> */}
          {Checkout(props, dispatch)}
        </TabPane>
        <TabPane tab="KẾT QUẢ ĐẶT VÉ" key="2">
          <KetQuaDatVe {...props} ttUser={thongTinNguoiDung} />
        </TabPane>

      </Tabs>
    </div>

  )

};




const Checkout = (props, dispatch) => {

  // const dispatch = useDispatch();
  console.log('render check out');

  // Thông Tin User Login
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)


  //Chi Tiết phòng vé
  const { chiTietPhongVe, danhSachGheDat } = useSelector(state => state.QuanLyDatVeReducer)
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

  //Danh Sách đặt ghế


  // useEffect(() => {
  //   const action = layChiTietPhongVeAction(props.match.params.id)
  //   dispatch(action)
  //   console.log('load action useEffect 2');
  // }, [])


  const renderGhe = () => {
    return danhSachGhe?.map((ghe, index) => {
      const classGheVip = (ghe.loaiGhe === 'Vip' ? 'gheVip' : '');
      const classDaDat = (ghe.daDat === true ? 'gheDaDat' : '');

      let classDangDat = '';
      let indexDD = danhSachGheDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
      if (indexDD != -1) {
        classDangDat = 'gheDangDat';
      }


      let classGheMinhDat = '';

      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheMinhDat = 'gheMinhDat';
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
          disabled={ghe.daDat} className={`${style['ghe']} ${style[classGheMinhDat]} ${style[classGheVip]} ${style[classDaDat]} ${style[classDangDat]} cursor-pointer`}>
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
          <div className='mt-5 flex justify-center'>
            <table className='divide-y divide-gray-300 w-2/3'>
              <thead className='bg-gray-50 p-5'>
                <tr>
                  <th>Ghế chưa đặt</th>
                  <th>Ghế đang đặt</th>
                  <th>Ghế Vip</th>
                  <th>Ghế được mình đặt</th>
                  <th>Ghế người khác  đặt</th>
                </tr>
              </thead>

              <tbody className='bg-white divide-y divide-gray-200 text-center'>
                <tr>
                  <td>
                    <button className='ghe text-center'></button>
                  </td>
                  <td>
                    <button className='ghe gheDangDat text-center'></button>
                  </td>
                  <td>
                    <button className='ghe gheVip text-center'></button>
                  </td>
                  <td>
                    <button className='ghe gheMinhDat text-center'></button>
                  </td>
                  <td>
                    <button className='ghe gheDaDat text-center'></button>
                  </td>
                </tr>
              </tbody>


            </table>
          </div>


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
            <div onClick={() => {
              const thongTinDatVe = new ThongTinDatVe()
              thongTinDatVe.maLichChieu = props.match.params.id
              thongTinDatVe.danhSachVe = danhSachGheDat

              console.log(thongTinDatVe);
              dispatch(datVeAction(thongTinDatVe));

              
              




            }} className='bg-green-500 text-white w-full text-center font-bold cursor-pointer'>
              Đặt Vé
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const KetQuaDatVe = (props) => {

  let veUserDat = props.ttUser.thongTinDatVe?.sort((a, b) => (a.tenPhim.length) - (b.tenPhim.length));


  console.log(veUserDat);
  const renderDanhSachVe = () => {
    return veUserDat?.map((sp, index) => {

      const seat = _.first(sp.danhSachGhe);
      return <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">{sp.tenPhim}</h2>
            <p className="text-gray-500">Ngày Đặt {moment(sp.ngayDat).format('DD:MM:YYYY')}</p>
            <p className='text-gray-500'>Tên Rạp: {
              seat.tenHeThongRap

            }</p>
            <p className='text-gray-500 break-all'>Số Ghế: {sp.danhSachGhe.map((ghe, index) => {
              return <span key={index} className='ml-3'>{ghe.tenGhe}</span>
            })}

            </p>
          </div>
        </div>
      </div>
    })
  }

  return (
    <div className='container p-5 px-40 m-auto'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Lịch Sử Đặt Vé</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Kết Quả Đặt vé.</p>
          </div>
          <div className="flex flex-wrap -m-2">
            {renderDanhSachVe()}
          </div>
        </div>
      </section>
    </div>
  )
}



export default Demo;


