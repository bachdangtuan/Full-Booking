import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../Film/Film_flip.css'
export default function Film_flip(props) {
    const { phim } = props;
    // trailer



    return (
        <div className="flip-card mb-2 ">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={phim.hinhAnh} alt="Avatar" style={{ width: '100%', height: 300 }} onError={(e) => (e.target.onerror = null, e.target.src = 'https://picsum.photos/75/75')} />
                </div>
                <div className="flip-card-back cursor-pointer">
                    <div className='pt-16 m-auto py-16'>
                        <h1 className='uppercase text-xl'>{phim.tenPhim}</h1>
                        {/* <a href={phim.trailer}> Trailer</a> */}
                        <button onClick={() => props.setModal(phim)} className="fa-solid fa-circle-play text-4xl " />

                    </div>

                    <div className='uppercase w-40 bg-black m-auto'>
                        <NavLink className='text-cente' to={`/detail/${phim.maPhim}`} >Đặt Vé</NavLink>
                    </div>

                </div>
            </div>

        </div>

    )
}




//Modal