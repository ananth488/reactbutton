import React, { useState } from 'react'
import { MdLocalFireDepartment } from 'react-icons/md'

const Time = () => {                

    let time =new Date().toLocaleTimeString();
    const [ctime,setctime]=useState(time)

    function clickme(){
        let time =new Date().toLocaleTimeString();
        setctime(time)
    }

    setInterval(clickme,1000)
  return (
    <>
    <div className='times'>
      
    <span>{ctime}</span>
    </div>
    {/* <button onClick={clickme}>Click</button> */}
    </>
  )
}

export default Time