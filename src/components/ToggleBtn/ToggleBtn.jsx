import React from 'react'

const ToggleBtn = ({handleToggleBtn}) => {
  return (
    <div className='absolute -mb-[650px]  lg:ml-[1050px]'>
      <div className='flex justify-center gap-4 items-center sticky z-40'>
        <button onClick={()=>handleToggleBtn('available')} className='btn border-2 border-[#0BE58A]'>Available</button>
        <button onClick={()=>handleToggleBtn('selected')} className='btn bg-[#52836f] border-2 '>Selected</button>
      </div>
    </div>
  )
}

export default ToggleBtn
