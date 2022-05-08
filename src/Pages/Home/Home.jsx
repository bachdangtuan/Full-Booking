import React, { useEffect, useState } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { useDispatch, useSelector } from 'react-redux';
import Film from '../../Component/Film/Film';
import MultirowSlickl from '../../Component/ReactMultirow/MultirowSlickl'
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';
import HomeCarousel from '../../Template/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
import style from './HomeMenu/Home.module.css'
import { layDanhSachRapAction } from '../../redux/actions/QuanLyRapAction';

export default function Home(props) {
  // Lấy danh Sách Phim
  let { arrDSphim } = useSelector(state => state.DanhSachPhimReducer)
  // Lấy danh sách Phim Modal

  let { phimModal } = useSelector(state => state.DanhSachPhimReducer)

  const dispatch = useDispatch()

  // const renderDSphim = () => {
  //   return arrDSphim.map((sp, index) => {
  //     return <Film key={index} />

  //   })
  // }
  useEffect(() => {
    dispatch(layDanhSachPhimAction())
  }, [])



  const setModal = (phim) => {
    console.log("phimTrailer", phim);
    setShowModal(true)
    dispatch(layDanhSachRapAction())
    dispatch({
      type: 'SET_MODAL_PHIM',
      phim
    })

  }
  const closeModal = () => {
    setShowModal(false)
    dispatch(layDanhSachRapAction())
  }

  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <section className="text-gray-600 body-font">
        <div className="container px-3 py-12 mx-auto">
          <div className='container m-auto px-40'>
            <h1 className={`text-center ${style['title']} `}>DANH SÁCH PHIM</h1>
            <MultirowSlickl arrDSphim={arrDSphim} setModal={setModal}  ></MultirowSlickl>
          </div>
        </div>
      </section>
      <div className="container m-auto px-40 ">
        <HomeMenu ></HomeMenu>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between border-b border-solid rounded-t">
                  <h1 className='text-xl text-center pl-4'>{phimModal.tenPhim}</h1>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-xl"
                    onClick={() =>
                      closeModal()
                    }>
                    X
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto">
                  <iframe width="718" height="315" src={phimModal.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-90 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    </div>

  )
}
