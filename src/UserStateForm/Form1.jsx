import { useState } from "react"
import toast from "react-hot-toast"

const Form1 = () => {
    let [state, setState] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    })
    let { username, password, confirmPassword } = state

    let handleChange = (e) => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }
    let handleSubmit =async(e)=>{
        e.preventDefault();
        console.log(state);
        try {
            await fetch("http://localhost:3000/users",
            {
                method:"POST",
                heers:{"Content-Type":"application/json"},
                body:JSON.stringify(state)
            })
            toast.success("Successfully data has been submitted")
        } catch (error) {
            console.log(error);
            toast.error("Error in submitting data")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}   >
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" name="username" value={username} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="text" name="password" value={password} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Confirm Password</label>
                    <input type="text" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                </div>
                <button>Register</button>
            </form>

        </div>
    )
}
export default Form1