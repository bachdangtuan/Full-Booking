import React, { useEffect, useState } from 'react'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment';

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
                <Tabs tabPosition='left'>
                    <TabPane tab="Tab 1" key="1">
                        Content of Tab 1
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab 3
                    </TabPane>
                </Tabs>

            </div>


        </div>
    )
}
