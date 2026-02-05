import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Form = () => {
  let [state, setState] = useState({
    name: "",
    email: "",
    password: ""
  })
  let { name, email, password } = state;

  let handleChange = (e) => {
    console.log(e.target);
    let { name, value } = e.target
    setState({
      ...state,
      [name]: value
    })
  }

  let handleSubmit = async (e) => {
    e.preventDefault()      
    console.log(state);
    try {
      await fetch("http://localhost:3500/users",    
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(state)
        })
      toast.success("Successfully data has been submitted")
    } catch (error) {
      console.log(error);
      toast.error("Error in submitting data")
    }

  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="w-72 p-4 border rounded-md space-y-4">

        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text" name="name" value={name} onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email" name="email" value={email} onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password" name="password" value={password} onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-1 rounded" >
          Submit
        </button>

      </form>
    </div>
  )
}

export default Form