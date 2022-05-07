import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetAPICarousel } from '../../../../redux/actions/CarouselAction';
import { red } from 'tailwindcss/colors';

const contentStyle = {
    height: '470px',
    color: '#fff',
    lineHeight: 'auto',
    textAlign: 'center'
};


export default function HomeCarousel(props) {
    const dispatch = useDispatch();
    // Khi component render xong thì kích hoạt
    useEffect(() => {
        dispatch(GetAPICarousel)
    }, [])

    let { arrCarousel } = useSelector(state => state.CarouselReducer)

    let renderCarousel = () => {

        return arrCarousel.map((sp, index) => {
            return <div key={index} className='pt-16'>
                <div style={contentStyle}>
                    <img src={sp.hinhAnh} style={{
                        width:'65%',
                        margin:'auto'
                    }} alt="anh nen" />
                </div>
            </div>
        })
    }
    return (
        <div  style={{
               background:'red'
        }}>
            <Carousel autoplay> 
                {renderCarousel()}
            </Carousel>
        </div>
    )
}
