import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function DiemCuoc(props) {
  
  
  const tongDiem = useSelector(state => state.GameBauCuaReducer.tongDiem)
  const dispatch = useDispatch();

  return (
    <div >
      <h3 className='text-center display-4' style={{color:'green'}}>GAME BẦU CUA DÂN GIAN</h3>
      <div className='text-center mt-3'> 
        <span style={{fontSize:'20px',borderRadius:'5px'}} className='p-3  text-white bg-danger'>Tiền thưởng: <span className='text-warning'>{tongDiem.toLocaleString()}</span></span>
      </div>
      <div className='text-center'>
        <button onClick={()=>{
          dispatch({
            type: 'CHOI_LAI'
          })
        }} style={{fontSize:'20px',borderRadius:'5px',border:'none' ,marginTop:'30px'}} className='p-1  text-white bg-success'>Chơi lại</button>
      </div>
    </div>
  )
}
