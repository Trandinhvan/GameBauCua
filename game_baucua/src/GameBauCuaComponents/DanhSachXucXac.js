import React from 'react'
import XucXac from './XucXac'
import { useSelector, useDispatch } from 'react-redux'

export default function DanhSachXucXac(props) {

  const mangXucXac = useSelector(state => state.GameBauCuaReducer.mangXucXac)

  const dispatch = useDispatch();


  return (
    <div>
      <div className='mt-5' style={{ width: '300px', height: '300px', borderRadius: '50%', background: '#fff' }}>
        <div className='row'>
          <div className='col-12 text-center' style={{marginLeft:'120px'}}>
              <XucXac xucXacItem= {mangXucXac[0]}></XucXac>
          </div>
        </div>
        <div className='row'>
          
          <div className='col-4 text-center' style={{margin:'-45px 0 0 60px'}}>
             <XucXac xucXacItem = {mangXucXac[1]}></XucXac>
          </div>
          <div className='col-4 text-center'  style={{marginTop:'-45px'}}>
              <XucXac xucXacItem = {mangXucXac[2]}></XucXac>
          </div>
          <div className='col-4'>

          </div>
        </div>
      </div>
      <div>
        <button onClick={()=>{
          dispatch({
            type: 'PLAY_GAME_BAU_CUA',
            
          })
        }} className='btn btn-success' style={{marginLeft:'110px',marginTop:'10px',padding:'5px 20px'}}>Xốc</button>
      </div>
    </div>

  )
}
