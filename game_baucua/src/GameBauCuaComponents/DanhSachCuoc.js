import React from 'react'
import QuanCuoc from './QuanCuoc'
import { useSelector } from 'react-redux'

export default function DanhSachCuoc(props) {

  //thay vì dùng mapstatetoprops để lấy ds cược về thì ở đây dùng hook useSelector
  const danhSachCuoc = useSelector(state => state.GameBauCuaReducer.danhSachCuoc)
  // console.log(danhSachCuoc)

  const renderDanhSachCuoc = ()=>{
    return danhSachCuoc.map((item,index)=>{
      return <div className='col-4' key={index}>
        <QuanCuoc quanCuoc={item}></QuanCuoc>
      </div>
    })
  }

  return (
    <div className='row mt-5'>
      {renderDanhSachCuoc()}
    </div>
  )
}
