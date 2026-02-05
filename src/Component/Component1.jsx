import { useState } from "react";
import Component2 from "./Component2";

const Component1 = () => {
    let [state,setSate]=useState(10)
    let obj={
        name:"meera",
        age:22,
        skills:["html,css,js"]
    }
    let obj1={
        name:"enemy",
        role:"haters"
    }
    return (
        <div>
              <Component2 value={{obj,obj1}}/>
        </div>
    )
}
export default Component1;