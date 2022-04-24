import React, { useEffect, useState } from 'react'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment';
import {NavLink} from 'react-router-dom'
import { layLichChieu } from '../../redux/actions/QuanLyRapAction'


export default function Details(props) {

    const dispatch = useDispatch();
    //Tab pannel
    const { TabPane } = Tabs;

    const filmDetail = useSelector(state => state.DanhSachPhimReducer.filmDetail)
    console.log({ filmDetail });
    useEffect(() => {
        //lấy thông tin param từ URL
        let { id } = props.match.params;
        dispatch(layLichChieu(id))

    }, [])

    //Hiện thị phần trmă
    const percentage = filmDetail.danhGia * 6;

    return (
        <div className='container px-40 m-auto'>
            <div className='grid grid-cols-12'>
                <div className='col-span-4 col-start-4'>
                    <div className='grid-cols-2 grid'>
                        <img src={filmDetail.hinhAnh} alt="" />
                        <div className='ml-10'>
                            <p>Ngày Chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD - MM - YYYY')}</p>
                            <h1>{filmDetail.tenPhim}</h1>
                            <p>{filmDetail.moTa}</p>
                        </div>
                    </div>
                </div>
                <CircularProgressbar className='ml-20' value={percentage} text={`${percentage}%`} />
            </div>
            <div className='mt-5 px-20'>

                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Lịch Chiếu" key="1">

                        <Tabs tabPosition='left'>
                            {filmDetail.heThongRapChieu?.map((htr, index) => {
                                return <TabPane tab={<div> <img src={htr.logo} alt="logo" width={50} height={50} /> </div>} key={index}>
                                    {htr?.cumRapChieu.map((cumRap, index) => {
                                        return <div key={index} className='flex flex-row mb-8' >
                                            <img src={cumRap.hinhAnh} alt="logo" width={50} height={50} className='mr-5' />
                                            <div>
                                                <h1>{cumRap.tenCumRap}</h1>
                                                <p>{cumRap.diaChi}</p>
                                                <div className='grid grid-cols-4'>
                                                    {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                                                        return <NavLink to='/' key={index} className='col-span-1 mr-3'>
                                                            {moment(lichChieu.ngayChieuGioChieu).format('HH:MM A')}

                                                        </NavLink>
                                                    })}

                                                </div>
                                            </div>

                                        </div>
                                    })}
                                </TabPane>
                            })}

                        </Tabs>
                    </TabPane>
                    <TabPane tab="Thông Tin" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Đánh Giá" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}
