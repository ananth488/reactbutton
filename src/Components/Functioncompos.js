import React, { useEffect, useState } from 'react'


function Functioncompos(){

    console.log("return")

    const[count,setcount]=useState(0);

    const clickme=()=>{
        setcount(count+1)
    } 

       (count!=0) ? alert("update") : setTimeout(()=>{alert("welcome")},2000)

    return(
        <>  
        <div className='click'>
        <h1>{count}</h1>
        <button type='btn' onClick={clickme}>Clickme</button>
        </div>
        </>
    )
}


export default Functioncompos