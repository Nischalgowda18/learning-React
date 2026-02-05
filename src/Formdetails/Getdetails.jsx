import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Getdetails = () => {
  let [state, setState] = useState([]);
  useEffect(() => {
    let fetching = async () => {
      let response = await fetch("http://localhost:3500/users")
      let data = await response.json();
      console.log(data);
      setState(data);
    }
    fetching();
  }, [])
  let handleupdate = (id) => {
    console.log(id);
  }
  let handledelete = (id) => {
    console.log(id);
  }
  return (
    <div className="flex flex-col gap-4 w-80" >
      {state.map((x) => {
        console.log(x);
        return (
          <div key={x.id} className='border border-slate-300 bg-slate-200 p-4 rounded-lg shadow-sm' >
            <p className='text-sm font-medium text-slate-800'>Name: <span className="text-slate-700">{x.name}</span></p>
            <p className='text-sm font-medium text-slate-700'>Email: {x.email}</p>
            <div className='flex mt-3 gap-3'>
              <button onClick={() => handleupdate(x.id)} 
              className="px-3 py-1 text-sm rounded-md bg-amber-400 text-slate-900 hover:bg-amber-500 transition"
              >update</button>
              <button onClick={() => handledelete(x.id)} 
              className='px-3 py-1 text-sm rounded-md bg-amber-400 text-slate-900 hover:bg-amber-500 transition'>clear</button>
            </div>
          </div>
        )
      })
      }
    </div>

  )
}

export default Getdetails