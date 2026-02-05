import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
    let [state,setState]= useState([]);
    useEffect(() => {
        let fetching = async()=>{
            let response = await fetch("https://dummyjson.com/products")
            let data = await response.json();
            console.log(data);
            setState(data.products);
        }
        fetching();
    },[]);
  return (
    state.map((x)=>{
        console.log(x);
        return(
            <div className='bg-black flex flex-col text-white gap-1 '>
            <h1>{x.title}</h1>
            <h1>{x.price}</h1>
            </div>
        )
    })
    
  )
}

export default UseEffect1