
import React, {useState} from 'react'

const Functioncom = () => {

const[value,setValue]=useState({name:"ananth",age:23,place:"chennai"});

// const{name,age,place}=value
    
function clickme(){
    
    setValue({name:"Nitheesh",age:22, place:"kaniyakumari"})
    console.log(setValue);
}

  return (
    <div>
        <h1>React</h1>
        <button onClick={clickme} type="button" class="button">{value.name+ " " + value.age+   " " + value.place}</button>  
        <h1 className='header' onClick={clickme}></h1>
    </div>
  )
}

export default Functioncom