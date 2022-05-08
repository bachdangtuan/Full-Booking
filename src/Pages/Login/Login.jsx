import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction'
import { QuanLyNguoiDungReducer } from '../../redux/reducers/QuanLyNguoiDungReducer';
export default function Login() {

  const dispatch = useDispatch();


  const { userLogin, thongTiNDangNhap } = useSelector(state => state.QuanLyNguoiDungReducer)
  console.log(thongTiNDangNhap);

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',

    },
    onSubmit: values => {
      const action = dangNhapAction(values);
      dispatch(action);        
    }
  })

  

  


  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form className="w-full md:w-1/3 bg-white rounded-lg" onSubmit={formik.handleSubmit} >
        <div className="flex font-bold justify-center mt-6">
          <img className="h-20 w-20" src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" />
        </div>
        <h2 className="text-3xl text-center text-gray-700 mb-4">Login Form</h2>
        <div className="px-12 pb-10">
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user" />
              <input name='taiKhoan' type="text" placeholder="Username" className="-mx-6 px-8  w-full border rounded  py-2 text-gray-700 focus:outline-none" onChange={formik.handleChange} />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock" />
              <input name='matKhau' type="password" placeholder="Password" className="-mx-6 px-8 w-full border rounded py-2 text-gray-700 focus:outline-none" onChange={formik.handleChange} />
            </div>
          </div>
          <a href="#" className="text-xs text-gray-500 float-right mb-4">Forgot Password?</a>
          <button type="submit" className="w-full py-2 rounded-full bg-green-600 text-gray-100  focus:outline-none">Button</button>
        </div></form>
    </div>

  )
}
