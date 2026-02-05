import React, { useState } from 'react'
import { FaRegEye,FaEyeSlash } from "react-icons/fa";

const Condition3 = () => {
    let [eye,seteye]=useState(false)
    let handleeye=()=>{
        seteye(!eye)
    }
  return (
    <div>
      <form action="">
        <label htmlFor="">name</label>
        <input type="text" /> <br /><br />

        <label htmlFor="">email</label>
        <input type="text" /> <br /><br />
<div id="one">
        <label htmlFor="">password</label>
        <input type={eye?"text":"password"}/> 

</div>
        <div onClick={handleeye} id='two'>
        {
         eye?<FaRegEye />:<FaEyeSlash />    
         } 
        </div>
        <button>submit</button>
        </form>
       
      </div>
    
  )
}

export default Condition3

