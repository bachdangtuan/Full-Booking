import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { useDispatch, useSelector } from 'react-redux';
import Film from '../../Component/Film/Film';
import MultirowSlickl from '../../Component/ReactMultirow/MultirowSlickl'
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';
import HomeCarousel from '../../Template/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
import style from './HomeMenu/Home.module.css'

export default function Home(props) {
  // Lấy danh Sách Phim
  let { arrDSphim } = useSelector(state => state.DanhSachPhimReducer)
  const dispatch = useDispatch()
  // const renderDSphim = () => {
  //   return arrDSphim.map((sp, index) => {
  //     return <Film key={index} />

  //   })
  // }
  useEffect(() => {
    dispatch(layDanhSachPhimAction())
  }, [])

  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <section className="text-gray-600 body-font">
        <div className="container px-3 py-12 mx-auto">
          <div className='container m-auto px-40'>
          <h1 className={`text-center ${style['title']} `}>DANH SÁCH PHIM</h1>
            <MultirowSlickl arrDSphim={arrDSphim} ></MultirowSlickl>

          </div>
        </div>
      </section>
      <div className="container m-auto px-40 ">
        <HomeMenu ></HomeMenu>
      </div>

    </div>

  )
}
