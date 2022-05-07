import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Film/Film_flip.css'
export default function Film_flip(props) {
    const { phim } = props;
    return (
        <div className="flip-card mb-14 ">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={phim.hinhAnh} alt="Avatar" style={{ width: '100%', height: 300 }} onError={(e) => (e.target.onerror = null, e.target.src = 'https://picsum.photos/75/75')} />
                </div>
                <div className="flip-card-back">
                    <h1>{phim.tenPhim}</h1>
            <NavLink className='text-center py-2 bg-orange-300 cursor-pointer' to={`/detail/${phim.maPhim}`} >Đặt Vé</NavLink>

                </div>
            </div>
        </div>

    )
}
