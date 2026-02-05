import { useState } from "react"

let Condition2 = ()=>{
    let [state,setState] = useState(true)
    let handleClick = () =>{
        setState(!state)
    }
    return(
        <div>
            <h1>Ternary Operator</h1>
            {
                state?<>
                <h1 id="one">This is true condition</h1>
                <button onClick={handleClick}>Click</button>
                </>:
                <>
                <h1 id="two">This is false condition</h1>
                <button onClick={handleClick}>Click</button></>
                }
        </div>
    )
}
export default Condition2