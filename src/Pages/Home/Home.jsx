import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { useDispatch, useSelector } from 'react-redux';
import Film from '../../Component/Film/Film';
import MultirowSlickl from '../../Component/ReactMultirow/MultirowSlickl'
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';


export default function Home(props) {

  let { arrDSphim } = useSelector(state => state.DanhSachPhimReducer)
  const dispatch = useDispatch()
  const renderDSphim = () => {
    return arrDSphim.map((sp, index) => {
      return <Film key={index} />

    })
  }
  useEffect(() => {
    dispatch (layDanhSachPhimAction())
  }, [])
  
  return (
    
    <div className='container m-auto px-40'>
           <MultirowSlickl arrDSphim={arrDSphim} ></MultirowSlickl>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {renderDSphim}
          </div>
        </div>
      </section>
   
      <HomeMenu></HomeMenu>
    </div>
  )
}
