import React, { Fragment, useEffect, useState } from 'react'
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachRapAction } from '../../../redux/actions/QuanLyRapAction';
import { NavLink } from 'react-router-dom'
import moment from 'moment';


export default function HomeMenu(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layDanhSachRapAction())
    }, [])
    // Lấy danh Sách Rạp
    let { arrRapPhim } = useSelector(state => state.QuanLyRapReducer)

    const { TabPane } = Tabs;
    const [state, setState] = useState({
        state: {
            tabPosition: 'left',
        }
    })

    //Render List Cụm Rạp


    //Render Hệ Thống Rạp
    const renderRapPhim = () => {
        const { tabPosition } = state.state
        return arrRapPhim.map((sp, index) => {
            return <TabPane tab={<img src={sp.logo} className="rounded-full" width="50" />} key={index}>

                <Tabs tabPosition={tabPosition} >
                    {sp.lstCumRap?.map((cumRap, index) => {
                        return <TabPane tab={
                            <div style={{ width: '320px' }} className='flex'>
                                <img src={cumRap.hinhAnh} width="50" />

                                <div className='text-left ml-2'>
                                    <h5> {cumRap.tenCumRap}</h5>
                                    <p>Chi Tiết</p>
                                </div>

                            </div>
                        } key={index}>

                            <div>
                                {cumRap.danhSachPhim.map((phim, index) => {
                                    return <Fragment key={index}>
                                        <div className='my-5' style={{ display: 'flex' }}>
                                            <div className='flex'>
                                                <img src={phim.hinhAnh} alt={phim.tenPhim} width={50} height={50} onError={(e) => (e.target.onerror = null, e.target.src = 'https://picsum.photos/75/75')} />
                                                <div className='ml-2'>
                                                    <h1>{phim.tenPhim}</h1>
                                                    <p>{cumRap.diaChi}</p>
                                                    <div className='grid grid-cols-5 gap-5'>
                                                        {phim.lstLichChieuTheoPhim?.splice(0, 10).map((lichChieu, index) => {
                                            
                                                            return <NavLink to='/' key={index}>
                                                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                            </NavLink>
                                                        })}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </Fragment>

                                })}
                            </div>

                        </TabPane>
                    })}
                </Tabs>

            </TabPane>
        })
    }

    const { tabPosition } = state.state
    return (
        <>
            {/* Ant Design Tab */}
            <Tabs tabPosition={tabPosition}>
                {renderRapPhim()}
            </Tabs>
        </>
    )
}
