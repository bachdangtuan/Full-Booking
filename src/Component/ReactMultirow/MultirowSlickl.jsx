import React, { Component } from "react";
import Slider from "react-slick";
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

export default class MultipleRows extends Component {

    // Render Phim Slick
    renderPhim = () => {

        return this.props.arrDSphim.slice(0,12).map((sp, index) => {
            return <div key={index} className={`${styleSlick['width-item']}`}>
                <Film_flip phim={sp}/>
            </div>

        })
    }
    render() {
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
                <h2>MultiRow</h2>
                <Slider {...settings}>
                    {this.renderPhim()}
                </Slider>
            </div>

        );
    }
}