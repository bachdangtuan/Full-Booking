import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';

const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function HomeCarousel(props) {

    let { arrCarousel } = useSelector(state => state.CarouselReducer)

    let renderCarousel = () => {
        return arrCarousel.map((sp, index) => {
           return <div key={index}>
                <div style={contentStyle}>
                    <img src={sp.hinhAnh} alt="" />
                </div>
            </div>
        })
    }

    console.log(arrCarousel);
    return (
        <div>
            <Carousel autoplay>
                {renderCarousel()}
            </Carousel>
        </div>
    )
}
