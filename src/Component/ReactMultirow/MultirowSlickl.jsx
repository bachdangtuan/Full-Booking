import React, { Component } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../../redux/actions/TypeAction/TypeQuanLyPhim";
import Film from "../Film/Film";
import Film_flip from "../Film/Film_flip";
import styleSlick from './MultirowSlick.module.css';

// Mũi Tên Trái
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} styleSlick ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}
// Mũi Tên Phải
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} styleSlick ${styleSlick['slick-next']}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

const MultirowSlickl = (props) => {
    const dispatch = useDispatch();
    // Render Phim Slick
    const renderPhim = () => {

        return props.arrDSphim.map((sp, index) => {
            return <div key={index} className={`${styleSlick['width-item']}`}>
                <Film_flip setModal={props.setModal} phim={sp} />
            </div>

        })
    }
    const settings = {
        className: "center variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 1,
        slidesPerRow: 2,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div>
            <div className="pb-5 text-center">
                <button type="button" className="px-8 py-3 mr-6 font-semibold rounded-full active bg-gray-600 text-white" onClick={() => {
                    const action = { type: SET_PHIM_DANG_CHIEU }
                    dispatch(action)

                }}>Phim Đang Chiếu</button>
                <button type="button" className="px-8 py-3 mr-6 font-semibold rounded-full bg-gray-600 text-white" onClick={() => {
                    const action = { type: SET_PHIM_SAP_CHIEU }
                    dispatch(action)

                }}>Phim Sắp Chiếu</button>
            </div>

            <Slider {...settings}>
                {renderPhim()}
            </Slider>
        </div>

    );
}
export default MultirowSlickl;