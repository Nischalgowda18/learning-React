import { useState } from "react"

let Condition1=()=>{
    let [state,setState] = useState(true)
    let change=()=>{
        setState(!state)
    }
    if(state){
        return(
            <>
            <h1>This is true</h1>
            <button onClick={change}>Click</button>
            </>
        )
    }
    else{
        return(
            <>
            <h1>This is false</h1>
            <button onClick={change}>Click</button>
            </>
        )
    }
}
export default Condition1