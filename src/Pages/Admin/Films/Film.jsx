import React, { Fragment, useEffect } from 'react'
import { Table, Button, } from 'antd';

import { Input, Space, } from 'antd';
import { AudioOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachPhimAction } from '../../../redux/actions/QuanLyPhimAction';
import { NavLink } from 'react-router-dom';
import { history } from '../../../App';

const { Search } = Input;



export default function Film() {


  // lấy data phim
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachPhimAction())
  }, [])



  let { arrDSphimDefault } = useSelector(state => state.DanhSachPhimReducer)
  console.log(arrDSphimDefault);



  const columns = [
    {
      title: 'Mã Phim',
      dataIndex: 'maPhim',
      width: '10%',
      sorter: (a, b) => a.maPhim - b.maPhim,
    },
    {
      title: 'Hình Ảnh',
      dataIndex: 'hinhAnh',
      render: (text, film) => {
        return <Fragment className='text-center'>
          <img src={text} alt={text} width={50} height={50} />
        </Fragment>
      },
      width: '10%',
    },
    {
      title: 'Tên Phim',
      dataIndex: 'tenPhim',
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();

        if (tenPhimA.length > tenPhimB.length) {
          return 1
        }
        return -1


      },
      width: '15%',
    },
    {
      title: 'Mô Tả',
      dataIndex: 'moTa',
      width: '50%',
    },
    {
      title: 'Hành Động',
      dataIndex: 'hanhDong',
      render: () => {
        return <Fragment className='text-center'>
          <NavLink to='/' className='text-4xl'> <EditOutlined className='mr-5' />  </NavLink>
          <NavLink to='/'  className='text-4xl text-red-600'> <DeleteOutlined />  </NavLink>

        </Fragment>
      },
    },
  ];


  const data = arrDSphimDefault;


  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  const onSearch = value => console.log(value);

  return (
    <div>
      <h1>Quản Lý Phim</h1>
      <Button className='mb-5' onClick={() =>{
        history.push('/admin/films/addnew')
      }
      }> Thêm Phim</Button>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      />

      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
}
