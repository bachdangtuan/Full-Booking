import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { GetAPICarousel } from '../../../../redux/actions/CarouselAction';

const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function HomeCarousel(props) {
    const dispatch = useDispatch();
    // Khi component render xong thì kích hoạt
    useEffect(() => {
        dispatch(GetAPICarousel)
        console.log('kích hoạt get API');
    }, [])

    let { arrCarousel } = useSelector(state => state.CarouselReducer)

    let renderCarousel = () => {

        return arrCarousel.map((sp, index) => {
            return <div key={index}>
                <div style={contentStyle}>
                    <img src={sp.hinhAnh} className='w-full' alt="anh nen" />
                </div>
            </div>
        })
    }
    return (
        <div>
            <Carousel autoplay>
                {renderCarousel()}
            </Carousel>
        </div>
    )
}
