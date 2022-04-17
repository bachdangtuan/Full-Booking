import React from 'react'
import '../Film/Film_flip.css'
export default function Film_flip(props) {
    const  {phim}  = props;
    console.log(phim);
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={phim.hinhAnh} alt="Avatar" style={{ width: '100%', height: 300 }} />
                </div>
                <div className="flip-card-back">
                    <h1>{phim.tenPhim}</h1>
                    <button></button>
                </div>
            </div>
        </div>

    )
}
