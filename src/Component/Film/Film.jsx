import React from 'react'

export default function Film(props) {

  const { phim } = props
  console.log(phim);

  return (
    <div className="p-3">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="m-auto" src={phim.hinhAnh} alt="Mountain" style={{
          width:'100%',
          height:'250px'
        }} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <h5>{phim.tenPhim}</h5>
          </div>
          <p className="text-gray-700 text-base">
  
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
        </div>
      </div>
    </div>

  )
}
