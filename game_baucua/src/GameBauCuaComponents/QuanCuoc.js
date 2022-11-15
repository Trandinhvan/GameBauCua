import React from 'react'
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring'

export default function QuanCuoc(props) {

  //bóc tách ra quân cược để sử dụng cho gọn khỏi phải props.quanCuoc.
  const {quanCuoc} = props;

  //distpatch lên reducer.
  const dispatch =useDispatch();

  const [propsUseSpringInCrease, setInCrease] = useSpring(() => {
    return {
        to: { scale: 1.25 },
        from: { scale: 1 },
        reset:true
    }
})

const [propsUseSpringDeCrease, setDeCrease] = useSpring(() => {
    return {
        to: { scale: 1.25 },
        from: { scale: 1 },
        reset: true
    }
})

  return (
    <div className='mt-2 mb-3'>
      <img src={quanCuoc.hinhAnh} alt='bau' style={{width:'200px',height:'200px',display:'block'}}></img>
      <div className='ml-4'>
        <animated.button onClick={()=>{
          setDeCrease({scale:1})
          setDeCrease({scale:1.25})
          dispatch({
            type:'DAT_CUOC_BAU_CUA',
            quanCuoc,
            tangGiam: false
          })
        }} className='mt-2 mr-2' style={{padding:'0px 10px',fontSize:'15px',background:'red',transform:propsUseSpringDeCrease.scale.to(scale => `scale(${scale})`)}}>-</animated.button>
          <span className='' style={{color: 'purple'}}>{quanCuoc.diemCuoc}</span>
        <animated.button onClick={()=>{
          setInCrease({scale:1})
          setInCrease({scale:1.25})
          dispatch({
            type:'DAT_CUOC_BAU_CUA',
            quanCuoc,
            tangGiam: true
          })
        }} className='mt-2 ml-2' style={{padding:'0px 10px',fontSize:'15px',background:'green',color:'#fff',transform:propsUseSpringInCrease.scale.to(scale => `scale(${scale})`)}}>+</animated.button>
      </div>
      
    </div>
  )
}
