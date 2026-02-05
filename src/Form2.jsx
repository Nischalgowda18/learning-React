import { useRef } from "react";

let Form=()=>{
    let formRef=useRef({
        name:"",
        email:"",
        password:""
    }
)
    let handleChange=(e)=>{
        console.log(e.target);
        let {name,value}=e.target
        formRef.current[name]=value  
    }
    
    let handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(formRef.current);
        await fetch("http://localhost:3000/users",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(formRef.current)

        })
    }

alert("added")
return(
<div>
<form action="" onSubmit={handleSubmit}>
    <div>
        <label htmlFor="">name</label>
        <input type="text" name="name" onChange={handleChange}/>
    </div>
    <div>
        <label htmlFor="">email</label>
        <input type="text" name="email" onChange={handleChange}/>
    </div>
    <div>
        <label htmlFor="">password</label>
        <input type="text" name="password" onChange={handleChange} />
    </div>
    <button>submit</button>
</form>
</div>
)}
export default Form
